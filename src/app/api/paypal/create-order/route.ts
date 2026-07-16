import { NextResponse } from "next/server";

const PAYPAL_MODE = process.env.PAYPAL_MODE || "sandbox";
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;

function baseUrl() {
  return PAYPAL_MODE === "live" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com";
}

async function getAccessToken() {
  if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
    throw new Error("PayPal is not configured");
  }

  const tokenRes = await fetch(`${baseUrl()}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });
  if (!tokenRes.ok) throw new Error("Failed to get PayPal access token");
  const tokenData = await tokenRes.json();
  return tokenData.access_token as string;
}

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();
    const amountText = String(amount ?? "").trim();
    if (!/^\d+(\.\d{1,2})?$/.test(amountText)) {
      return NextResponse.json({ error: "Enter a valid donation amount" }, { status: 400 });
    }

    const numericAmount = Number(amountText);
    if (!Number.isFinite(numericAmount) || numericAmount < 1 || numericAmount > 100_000) {
      return NextResponse.json({ error: "Donation amount must be between $1 and $100,000" }, { status: 400 });
    }

    const formattedAmount = numericAmount.toFixed(2);
    const accessToken = await getAccessToken();

    const orderRes = await fetch(`${baseUrl()}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        application_context: {
          brand_name: "The Daily Bread Project",
          landing_page: "LOGIN",
          user_action: "PAY_NOW",
          shipping_preference: "NO_SHIPPING",
        },
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: formattedAmount,
            },
          },
        ],
      }),
    });

    if (!orderRes.ok) {
      const err = await orderRes.text();
      return NextResponse.json({ error: err }, { status: 500 });
    }

    const orderData = await orderRes.json();
    return NextResponse.json({ orderID: orderData.id });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

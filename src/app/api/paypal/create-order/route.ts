import { NextResponse } from "next/server";

const PAYPAL_MODE = process.env.PAYPAL_MODE || "sandbox";
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;

function baseUrl() {
  return PAYPAL_MODE === "live" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com";
}

async function getAccessToken() {
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
    const { amount = "0.00", currency = "USD" } = await req.json();
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
              currency_code: currency,
              value: String(amount),
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
  } catch (err: any) {
    return NextResponse.json({ error: err.message || String(err) }, { status: 500 });
  }
}

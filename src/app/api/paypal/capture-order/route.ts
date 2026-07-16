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
    const { orderID } = await req.json();
    if (typeof orderID !== "string" || !/^[A-Z0-9]{10,30}$/i.test(orderID)) {
      return NextResponse.json({ error: "A valid PayPal order ID is required" }, { status: 400 });
    }

    const accessToken = await getAccessToken();

    const captureRes = await fetch(`${baseUrl()}/v2/checkout/orders/${orderID}/capture`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!captureRes.ok) {
      const err = await captureRes.text();
      return NextResponse.json({ error: err }, { status: 500 });
    }

    const captureData = await captureRes.json();
    return NextResponse.json({ capture: captureData });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

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
    const { orderID } = await req.json();
    if (!orderID) return NextResponse.json({ error: "orderID required" }, { status: 400 });

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
  } catch (err: any) {
    return NextResponse.json({ error: err.message || String(err) }, { status: 500 });
  }
}

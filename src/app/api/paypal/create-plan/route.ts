import { NextResponse } from "next/server";
import { monthlyDonationAmounts } from "@/content/programs";

const PAYPAL_MODE = process.env.PAYPAL_MODE || "sandbox";
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;
const PRODUCT_NAME = "Monthly Bread Partner Donations";

type PayPalProduct = { id: string; name: string };
type PayPalPlan = { id: string; name: string; status: string };

function baseUrl() {
  return PAYPAL_MODE === "live" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com";
}

async function getAccessToken() {
  if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) throw new Error("PayPal is not configured");

  const response = await fetch(`${baseUrl()}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });
  if (!response.ok) throw new Error("Unable to authenticate with PayPal");
  const data = await response.json();
  return data.access_token as string;
}

async function paypalFetch(path: string, token: string, init?: RequestInit) {
  return fetch(`${baseUrl()}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });
}

async function ensureProduct(token: string) {
  const listResponse = await paypalFetch("/v1/catalogs/products?page_size=20&page=1&total_required=true", token);
  if (!listResponse.ok) throw new Error("Unable to list PayPal subscription products");
  const list = (await listResponse.json()) as { products?: PayPalProduct[] };
  const existing = list.products?.find((product) => product.name === PRODUCT_NAME);
  if (existing) return existing.id;

  const createResponse = await paypalFetch("/v1/catalogs/products", token, {
    method: "POST",
    headers: { "PayPal-Request-Id": "dbp-monthly-product-v1", Prefer: "return=representation" },
    body: JSON.stringify({
      name: PRODUCT_NAME,
      description: "Recurring monthly donations to The Daily Bread Project",
      type: "SERVICE",
    }),
  });
  if (!createResponse.ok) throw new Error("Unable to create the PayPal subscription product");
  const product = (await createResponse.json()) as PayPalProduct;
  return product.id;
}

async function ensurePlan(token: string, productID: string, amount: string) {
  const planName = `Monthly Bread Partner - $${amount}`;
  const listResponse = await paypalFetch(`/v1/billing/plans?product_id=${encodeURIComponent(productID)}&page_size=20&total_required=true`, token);
  if (!listResponse.ok) throw new Error("Unable to list PayPal subscription plans");
  const list = (await listResponse.json()) as { plans?: PayPalPlan[] };
  const existing = list.plans?.find((plan) => plan.name === planName && plan.status === "ACTIVE");
  if (existing) return existing.id;

  const createResponse = await paypalFetch("/v1/billing/plans", token, {
    method: "POST",
    headers: {
      "PayPal-Request-Id": `dbp-monthly-${amount.replace(".", "")}`,
      Prefer: "return=representation",
    },
    body: JSON.stringify({
      product_id: productID,
      name: planName,
      description: `$${amount} recurring monthly donation`,
      status: "ACTIVE",
      billing_cycles: [
        {
          frequency: { interval_unit: "MONTH", interval_count: 1 },
          tenure_type: "REGULAR",
          sequence: 1,
          total_cycles: 0,
          pricing_scheme: { fixed_price: { value: amount, currency_code: "USD" } },
        },
      ],
      payment_preferences: {
        auto_bill_outstanding: true,
        setup_fee_failure_action: "CONTINUE",
        payment_failure_threshold: 3,
      },
    }),
  });
  if (!createResponse.ok) throw new Error("Unable to create the PayPal monthly plan");
  const plan = (await createResponse.json()) as PayPalPlan;
  return plan.id;
}

export async function POST(request: Request) {
  try {
    const { amount } = await request.json();
    const numericAmount = Number(amount);
    const allowed = monthlyDonationAmounts.some((item) => item.amount === numericAmount);
    if (!allowed) {
      return NextResponse.json({ error: "Select one of the available monthly donation amounts" }, { status: 400 });
    }

    const formattedAmount = numericAmount.toFixed(2);
    const token = await getAccessToken();
    const productID = await ensureProduct(token);
    const planID = await ensurePlan(token, productID, formattedAmount);
    return NextResponse.json({ planID });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unable to prepare monthly donations";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

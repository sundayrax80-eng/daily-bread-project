import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Inner, PageHero, Section } from "@/components/Section";

export const metadata: Metadata = { title: "Thank You", robots: { index: false, follow: false } };

function baseUrl() {
  const mode = process.env.PAYPAL_MODE || "sandbox";
  return mode === "live" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com";
}

async function getAccessToken() {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
  const tokenRes = await fetch(`${baseUrl()}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });
  if (!tokenRes.ok) throw new Error("Failed to get PayPal token");
  const json = await tokenRes.json();
  return json.access_token as string;
}

async function fetchOrder(orderID: string) {
  const token = await getAccessToken();
  const res = await fetch(`${baseUrl()}/v2/checkout/orders/${orderID}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Failed to fetch order");
  return res.json();
}

export default async function ThankYouPage({ searchParams }: { searchParams?: { orderID?: string } }) {
  const orderID = searchParams?.orderID;
  let order: any = null;
  try {
    if (orderID) order = await fetchOrder(orderID);
  } catch (e) {
    // ignore and show fallback UI
    console.error(e);
  }

  const payerName = order?.payer?.name ? `${order.payer.name.given_name ?? ""} ${order.payer.name.surname ?? ""}`.trim() : null;
  const amount = order?.purchase_units?.[0]?.amount?.value ?? null;
  const currency = order?.purchase_units?.[0]?.amount?.currency_code ?? "USD";
  const status = order?.status ?? null;

  return (
    <>
      <PageHero
        title={order ? "Thank you — payment received" : "Your generosity just became practical help."}
        text={
          order
            ? `Thank you ${payerName ?? ""}. We received your ${currency} ${amount}. Your gift will help provide meals, emergency support, and pathways to stability for people in need.`
            : "Thank you for supporting The Daily Bread Project. Your gift helps us respond with dignity, compassion, and practical support."
        }
      />

      <Section>
        <Inner className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm">
          {order ? (
            <div className="grid gap-4">
              <div>
                <h2 className="font-serif text-xl font-bold text-chocolate">Payment details</h2>
                <p className="mt-2 text-sm text-charcoal/80">Order ID: <strong>{orderID}</strong></p>
                <p className="text-sm text-charcoal/80">Status: <strong>{status}</strong></p>
                <p className="text-sm text-charcoal/80">Amount: <strong>{currency} {amount}</strong></p>
                <p className="text-sm text-charcoal/80">Payer: <strong>{payerName}</strong></p>
              </div>
              <div>
                <h3 className="font-semibold">What happens next</h3>
                <p className="mt-2 text-sm text-charcoal/75">You will receive an email receipt from PayPal. Your contribution helps fund direct services — if you need a formal receipt, a copy for your records, or have questions about your gift, contact us and include the Order ID above.</p>
              </div>
              <div className="flex gap-3">
                <Button href="/contact">Contact donation support</Button>
                <Button href="/">Back to home</Button>
              </div>
            </div>
          ) : (
            <div className="grid gap-4">
              <h2 className="font-serif text-2xl font-bold text-chocolate">Thank you</h2>
              <p className="mt-2 text-charcoal/75">We’ve received your intent to give. If this was a completed payment, the payment details will appear here shortly. If you have questions, contact donation support.</p>
              <div className="flex gap-3 mt-4"><Button href="/contact">Contact donation support</Button><Button href="/">Back to home</Button></div>
            </div>
          )}
        </Inner>
      </Section>
    </>
  );
}

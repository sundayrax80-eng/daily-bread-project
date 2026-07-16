import { NextResponse } from "next/server";
import { validateForm } from "@/lib/validation";

export async function POST(request: Request) {
  const result = validateForm(await request.formData(), ["name", "email", "organization", "partnerType", "interest", "message", "consent"]);
  return NextResponse.json(result, { status: result.ok ? 200 : 400 });
}

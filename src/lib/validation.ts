export type FormResult = { ok: boolean; message: string; errors?: Record<string, string> };

export function sanitize(value: FormDataEntryValue | null) {
  return String(value || "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, 2000);
}

export function validateForm(formData: FormData, required: string[]): FormResult {
  const errors: Record<string, string> = {};
  const honeypot = sanitize(formData.get("company_website"));
  if (honeypot) return { ok: false, message: "Submission could not be accepted." };

  for (const field of required) {
    if (!sanitize(formData.get(field))) errors[field] = "This field is required.";
  }

  const email = sanitize(formData.get("email"));
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email address.";

  if (Object.keys(errors).length) return { ok: false, message: "Please review the highlighted fields.", errors };
  return { ok: true, message: "Thank you. Your submission was received." };
}

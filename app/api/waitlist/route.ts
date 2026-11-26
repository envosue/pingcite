import { NextRequest, NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
  }

  // No database is provisioned yet (Supabase is still on the infra backlog) —
  // signups are logged to the deployment's function logs until that lands.
  console.log(`[waitlist] ${new Date().toISOString()} ${email}`);

  return NextResponse.json({ ok: true });
}

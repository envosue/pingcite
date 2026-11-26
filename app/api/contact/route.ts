import { NextRequest, NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const product = typeof body?.product === "string" ? body.product.trim() : "";

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
  }
  if (!product) {
    return NextResponse.json({ error: "Enter your product or company name." }, { status: 400 });
  }

  // No database or inbox is provisioned yet (pingcite.com + Workspace are still
  // on the infra backlog) — pricing requests are logged to the deployment's
  // function logs until that lands, same stopgap as /api/waitlist.
  console.log(`[contact] ${new Date().toISOString()} ${email} — ${product}`);

  return NextResponse.json({ ok: true });
}

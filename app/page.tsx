import { Lockup, RingMark, Wordmark } from "./components/Logo";
import { WaitlistForm } from "./components/WaitlistForm";
import { siteName, siteUrl } from "./site-config";

const steps = [
  {
    n: "01",
    title: "We query your category",
    body: "We run 30–50 real customer-style prompts — branded, category and comparison queries — through the AI assistants your buyers actually use.",
  },
  {
    n: "02",
    title: "We score your visibility",
    body: "Every answer is checked for whether you're named, actually linked, and how you stack up against the competitors who got cited instead.",
  },
  {
    n: "03",
    title: "We show you what's hurting citations",
    body: "A content diagnostic flags the gaps — missing schema, thin semantic structure, stale metadata — that keep AI engines from citing your pages.",
  },
  {
    n: "04",
    title: "We fix it, if you want",
    body: "Optional: we implement the top fixes ourselves, then re-run the same prompts 30 days later to prove the move.",
  },
];

const auditFeatures = [
  "30–50 prompts (branded, category & comparison queries), run multiple times each",
  "Checked across Perplexity, Gemini, and ChatGPT (via OpenAI’s web_search API — the legitimate proxy for its citation behavior)",
  "Google AI Overview: coming soon — not included in v1",
  "0–100 Visibility Score, citation rate (named vs. actually linked), competitor share-of-voice",
  "Content diagnostic: schema markup, semantic HTML, metadata freshness on your own pages",
  "Deliverable: a scored report + ranked fix list",
];

const fixFeatures = [
  "We implement the top 5–8 fixes from your audit",
  "Schema markup, citable stats added to pages, FAQ/claim restructuring",
  "Metadata refresh, llms.txt setup, content gap-fill",
  "Not included: full rewrites, ongoing monitoring, or any guarantee of future citation",
  "Proof point: a 30-day re-audit on the same prompt set, included",
];

const faqs = [
  {
    q: "Which AI engines do you check?",
    a: "Perplexity and Gemini through their official APIs, plus ChatGPT’s citation behavior through OpenAI’s web_search API — the same system behind ChatGPT’s own search results, though not the consumer app directly. Google AI Overview has no official API yet, so it’s coming soon, not in v1.",
  },
  {
    q: "How is this different from SEO?",
    a: "SEO optimizes for search-engine rankings and clicks. We check whether AI assistants actually name and link you when someone asks a question in your category — a different, newer kind of visibility that classic SEO tools don’t measure.",
  },
  {
    q: "What if my score doesn’t improve?",
    a: "We don’t guarantee future citations — no one honestly can, since the engines decide that themselves. What we do guarantee is a 30-day re-audit on the exact same prompt set after the fix tier, so you can see the real before/after.",
  },
];

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 text-small text-text-2">
      <span className="mt-1 text-teal-light" aria-hidden="true">
        &#10003;
      </span>
      <span>{children}</span>
    </li>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      description:
        "PingCite runs an AI-visibility (AEO) audit that checks whether ChatGPT, Perplexity, and Gemini cite a SaaS product in their answers, and what to fix if they don't.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      name: siteName,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: siteUrl,
      description:
        "PingCite runs an AI-visibility (AEO) audit that checks whether ChatGPT, Perplexity, and Gemini cite a SaaS product in their answers, and what to fix if they don't.",
      offers: [
        { "@type": "Offer", name: "Visibility Audit", price: "99", priceCurrency: "USD" },
        { "@type": "Offer", name: "Fix Implementation", price: "1000", priceCurrency: "USD" },
      ],
    },
    {
      "@type": "Service",
      name: "Visibility Audit",
      provider: { "@id": `${siteUrl}/#organization` },
      description:
        "30-50 branded, category and comparison prompts run across Perplexity, Gemini and ChatGPT, scored into a 0-100 Visibility Score, citation rate, competitor share-of-voice and a ranked fix list.",
      offers: {
        "@type": "Offer",
        price: "99",
        priceCurrency: "USD",
      },
    },
    {
      "@type": "Service",
      name: "Fix Implementation",
      provider: { "@id": `${siteUrl}/#organization` },
      description:
        "Implementation of the top 5-8 fixes from a Visibility Audit (schema markup, citable stats, FAQ/claim restructuring, metadata refresh, llms.txt setup, content gap-fill), plus a 30-day re-audit on the same prompt set.",
      offers: {
        "@type": "Offer",
        price: "1000",
        priceCurrency: "USD",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Lockup iconSize={24} textSize={16} />
          <nav className="hidden items-center gap-8 sm:flex" aria-label="Primary">
            <a href="#how-it-works" className="text-small text-text-2 hover:text-teal-light">
              How it works
            </a>
            <a href="#pricing" className="text-small text-text-2 hover:text-teal-light">
              Pricing
            </a>
            <a href="#faq" className="text-small text-text-2 hover:text-teal-light">
              FAQ
            </a>
          </nav>
          <a
            href="#waitlist"
            className="rounded-full bg-teal px-4 py-2 text-small font-medium text-ink hover:bg-teal-light"
          >
            Join waitlist
          </a>
        </div>
      </header>

      <main className="flex flex-col">
        {/* ============ HERO ============ */}
        <section
          id="hero"
          className="ring-pattern-hero relative overflow-hidden border-b border-border px-4 py-24 sm:py-32"
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
            <RingMark size={40} />
            <p className="text-overline text-teal-light">AI visibility audit</p>
            <h1 className="text-display font-display text-text">
              Know if AI recommends you
            </h1>
            <p className="text-body-lg max-w-xl text-text-2">
              ChatGPT, Perplexity and Gemini already answer questions about your category.
              We tell you if they cite you — and exactly what to fix if they don’t.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#waitlist"
                className="text-body rounded-full bg-teal px-8 py-4 font-medium text-ink hover:bg-teal-light"
              >
                Get notified when audits open
              </a>
              <a
                href="#pricing"
                className="text-body rounded-full border border-border px-8 py-4 font-medium text-text hover:border-teal-light"
              >
                See pricing
              </a>
            </div>
            <p className="text-small text-muted">
              Starting at $99 — Perplexity, Gemini &amp; ChatGPT citation checks
            </p>
          </div>
        </section>

        {/* ============ HOW IT WORKS ============ */}
        <section id="how-it-works" className="border-b border-border px-4 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-overline text-teal-light">How it works</p>
            <h2 className="text-h2 font-display mt-2 mb-16 max-w-2xl">
              From blind spot to fix list
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <div
                  key={step.n}
                  className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-8"
                >
                  <span className="text-h4 font-display text-teal-light">{step.n}</span>
                  <h3 className="text-body font-display font-semibold text-text">
                    {step.title}
                  </h3>
                  <p className="text-small text-text-2">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PRICING ============ */}
        <section id="pricing" className="border-b border-border px-4 py-24">
          <div className="mx-auto max-w-5xl">
            <p className="text-overline text-teal-light">Pricing</p>
            <h2 className="text-h2 font-display mt-2 mb-4 max-w-2xl">
              Two ways to work with us
            </h2>
            <p className="text-body-lg mb-16 max-w-xl text-text-2">
              Start with the audit. Add the fix tier once you know exactly what to fix.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-6 rounded-2xl border border-border bg-surface p-8">
                <p className="text-overline text-muted">Starter</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-h1 font-display text-teal-light">$99</span>
                  <span className="text-small text-muted">one-time</span>
                </div>
                <h3 className="text-h4 font-display text-text">Visibility Audit</h3>
                <ul className="flex flex-col gap-2">
                  {auditFeatures.map((f) => (
                    <CheckItem key={f}>{f}</CheckItem>
                  ))}
                </ul>
                <a
                  href="#waitlist"
                  className="text-body mt-2 rounded-full bg-teal px-8 py-4 text-center font-medium text-ink hover:bg-teal-light"
                >
                  Join the waitlist
                </a>
              </div>

              <div className="flex flex-col gap-6 rounded-2xl border border-teal-light bg-surface p-8">
                <p className="text-overline text-muted">Fix tier</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-h1 font-display text-teal-light">$1,000</span>
                  <span className="text-small text-muted">one-time</span>
                </div>
                <h3 className="text-h4 font-display text-text">Fix Implementation</h3>
                <ul className="flex flex-col gap-2">
                  {fixFeatures.map((f) => (
                    <CheckItem key={f}>{f}</CheckItem>
                  ))}
                </ul>
                <a
                  href="#waitlist"
                  className="text-body mt-2 rounded-full bg-teal px-8 py-4 text-center font-medium text-ink hover:bg-teal-light"
                >
                  Join the waitlist
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section id="faq" className="border-b border-border px-4 py-24">
          <div className="mx-auto max-w-3xl">
            <p className="text-overline text-teal-light">FAQ</p>
            <h2 className="text-h2 font-display mt-2 mb-16">Questions, answered straight</h2>
            <div className="flex flex-col gap-4">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-border bg-surface p-8"
                >
                  <summary className="text-body font-display flex cursor-pointer list-none items-center justify-between font-semibold text-text">
                    {item.q}
                    <span className="text-teal-light group-open:rotate-45" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="text-small mt-4 text-text-2">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ============ WAITLIST CTA ============ */}
        <section
          id="waitlist"
          className="ring-pattern-soft border-b border-border bg-surface px-4 py-24"
        >
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
            <p className="text-overline text-teal-light">Get notified</p>
            <h2 className="text-h2 font-display">Be first when audits open</h2>
            <p className="text-body-lg text-text-2">
              We&apos;re finishing the pipeline. Leave your email and we&apos;ll tell you the
              moment you can run your first audit.
            </p>
            <WaitlistForm />
            <p className="text-small text-muted">No spam. One email, when it&apos;s ready.</p>
          </div>
        </section>
      </main>

      <footer className="px-4 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <Wordmark size={14} />
          </div>
          <p className="text-small text-muted">&copy; 2026 PingCite</p>
        </div>
      </footer>
    </>
  );
}

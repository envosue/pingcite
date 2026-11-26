"use client";

import { useState } from "react";

export function ContactForm() {
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, product }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Something went wrong.");
      setStatus("done");
      setMessage("Thanks — we'll follow up with pricing shortly.");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "done") {
    return (
      <p className="text-body text-teal-light" role="status">
        {message}
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full max-w-md flex-col gap-4"
      noValidate
    >
      <label htmlFor="contact-product" className="sr-only">
        Product or company name
      </label>
      <input
        id="contact-product"
        type="text"
        required
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        placeholder="Your product or company name"
        className="text-body w-full rounded-full border border-border bg-surface px-6 py-4 text-text placeholder:text-muted focus:border-teal-light focus:outline-none"
      />
      <label htmlFor="contact-email" className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@yourproduct.com"
          className="text-body w-full rounded-full border border-border bg-surface px-6 py-4 text-text placeholder:text-muted focus:border-teal-light focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="text-body shrink-0 rounded-full bg-teal px-8 py-4 font-medium text-ink transition hover:bg-teal-light disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Request pricing"}
        </button>
      </div>
      {status === "error" && (
        <p className="text-small text-error" role="alert">
          {message}
        </p>
      )}
    </form>
  );
}

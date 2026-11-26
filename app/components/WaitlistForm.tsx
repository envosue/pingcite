"use client";

import { useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Something went wrong.");
      setStatus("done");
      setMessage("You're on the list — we'll email you when audits open.");
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
      className="flex w-full max-w-md flex-col gap-4 sm:flex-row sm:gap-2"
      noValidate
    >
      <label htmlFor="waitlist-email" className="sr-only">
        Email address
      </label>
      <input
        id="waitlist-email"
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
        {status === "loading" ? "Joining…" : "Get notified"}
      </button>
      {status === "error" && (
        <p className="text-small text-error sm:basis-full" role="alert">
          {message}
        </p>
      )}
    </form>
  );
}

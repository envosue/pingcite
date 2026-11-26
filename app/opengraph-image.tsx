import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "PingCite — See your AI visibility signal";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
          backgroundColor: "#0b1220",
          backgroundImage:
            "radial-gradient(circle at 50% 35%, rgba(45,212,191,0.25), rgba(11,18,32,0) 60%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width={84} height={84} viewBox="0 0 34 34">
            <circle cx="17" cy="17" r="3.4" fill="#2DD4BF" />
            <circle
              cx="17"
              cy="17"
              r="10"
              fill="none"
              stroke="#2DD4BF"
              strokeWidth="2"
              opacity="0.65"
            />
            <circle
              cx="17"
              cy="17"
              r="16"
              fill="none"
              stroke="#2DD4BF"
              strokeWidth="2"
              opacity="0.3"
            />
          </svg>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 700 }}>
            <span style={{ color: "#f1f5f9" }}>Ping</span>
            <span style={{ color: "#14b8a6" }}>Cite</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            fontWeight: 500,
            color: "#cbd5e1",
            maxWidth: 880,
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          Know if ChatGPT, Perplexity &amp; Gemini recommend you
        </div>
      </div>
    ),
    { ...size }
  );
}

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
          backgroundColor: "#0b0d12",
          backgroundImage:
            "radial-gradient(circle at 50% 35%, rgba(94,234,212,0.25), rgba(11,13,18,0) 60%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width={84} height={84} viewBox="0 0 34 34">
            <defs>
              <clipPath id="og-pulse-clip">
                <circle cx="17" cy="17" r="13.5" />
              </clipPath>
            </defs>
            <circle cx="17" cy="17" r="16" fill="none" stroke="#14B8A6" strokeWidth="1.4" opacity="0.22" />
            <circle cx="17" cy="17" r="11" fill="none" stroke="#14B8A6" strokeWidth="1.6" opacity="0.45" />
            <g clipPath="url(#og-pulse-clip)">
              <path
                d="M2 17 H10.5 L13 10.5 L16.2 24.5 L18.6 12.5 L20.6 17 H32"
                fill="none"
                stroke="#5EEAD4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <circle cx="17" cy="17" r="3.2" fill="#5EEAD4" />
          </svg>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 700 }}>
            <span style={{ color: "#f5f7fa" }}>Ping</span>
            <span style={{ color: "#14b8a6" }}>Cite</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            fontWeight: 500,
            color: "#9fb2ae",
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

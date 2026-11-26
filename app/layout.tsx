import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { siteUrl } from "./site-config";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["italic"],
  subsets: ["latin"],
});

const title = "PingCite — See your AI visibility signal";
const description =
  "Know if ChatGPT, Perplexity and Gemini recommend your product — and exactly what to fix if they don't. A scored AI-visibility audit for indie SaaS founders.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        {children}
      </body>
    </html>
  );
}

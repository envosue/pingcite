// Falls back to the live Vercel deployment URL until pingcite.com is purchased and attached.
export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://pingcite.com";

export const siteName = "PingCite";

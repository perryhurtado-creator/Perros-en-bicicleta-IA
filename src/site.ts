/* One source of truth for the site's identity and its canonical origin.
   Server-only by intent: VERCEL_PROJECT_PRODUCTION_URL is not exposed to the
   browser, so importing SITE_URL into a client component would resolve
   differently on each side. Keep this module out of "use client" files. */

function resolveOrigin(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "").replace(/\/+$/, "")}`;

  return "http://localhost:3000";
}

export const SITE_URL = resolveOrigin();
export const SITE_NAME = "OpenHiggsfield AI";
export const SITE_DESCRIPTOR = "Open source AI studio";
export const SITE_TITLE = `${SITE_NAME} — ${SITE_DESCRIPTOR}`;
export const SITE_DESCRIPTION =
  "A studio for image and video generation — one prompt bar, each model’s own settings, and every finished run in one gallery.";
export const STUDIO_BG = "#0a0a0b";

export const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  type: "image/png",
  alt: "The OpenHiggsfield AI open-frame mark on a near-black field",
};

export function openGraphFor({
  path,
  title = SITE_TITLE,
  description = SITE_DESCRIPTION,
}: {
  path: string;
  title?: string;
  description?: string;
}) {
  return {
    type: "website" as const,
    siteName: SITE_NAME,
    locale: "en_US",
    url: path,
    title,
    description,
    images: [OG_IMAGE],
  };
}

export function twitterFor({
  title = SITE_TITLE,
  description = SITE_DESCRIPTION,
}: { title?: string; description?: string } = {}) {
  return {
    card: "summary_large_image" as const,
    title,
    description,
    images: [OG_IMAGE],
  };
}

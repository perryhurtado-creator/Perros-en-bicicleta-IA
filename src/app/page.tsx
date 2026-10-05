import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/app/base.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-ohf-inter",
  display: "swap",
});

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function OpenHiggsfieldPage() {
  return (
    <main className={inter.variable} style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <div style={{ maxWidth: 1100, width: "100%", padding: 32 }}>
        <div style={{ border: "1px solid rgba(255,255,255,0.12)", background: "#0b0b0d", borderRadius: 20, padding: 32 }}>
          <p style={{ color: "#d1fe17", letterSpacing: 2, textTransform: "uppercase", fontSize: 12, margin: 0 }}>
            Open source AI studio
          </p>
          <h1 style={{ color: "#f5f5f5", fontSize: "clamp(2.2rem, 4vw, 4.5rem)", lineHeight: 1.05, margin: "18px 0 12px" }}>
            OpenHiggsfield AI
          </h1>
          <p style={{ color: "#d5d5d7", fontSize: 18, maxWidth: 700, margin: "0 0 24px" }}>
            One prompt bar, image and video generation, model catalogs, and a gallery-driven workflow inspired by the
            original OpenHiggsfield studio.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 28 }}>
            {[
              "Image generation",
              "Video generation",
              "Prompt workflow",
              "Gallery + reuse",
            ].map((label) => (
              <span
                key={label}
                style={{
                  padding: "8px 14px",
                  borderRadius: 999,
                  border: "1px solid rgba(209,254,23,0.35)",
                  color: "#d1fe17",
                  background: "rgba(209,254,23,0.06)",
                  fontSize: 13,
                }}
              >
                {label}
              </span>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            <div style={{ background: "#101114", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 20 }}>
              <div style={{ color: "#d1fe17", fontSize: 12, marginBottom: 8 }}>Studio</div>
              <div style={{ color: "#f4f4f5", fontSize: 24, fontWeight: 700 }}>38 models</div>
            </div>
            <div style={{ background: "#101114", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 20 }}>
              <div style={{ color: "#d1fe17", fontSize: 12, marginBottom: 8 }}>Surface</div>
              <div style={{ color: "#f4f4f5", fontSize: 24, fontWeight: 700 }}>Image + video</div>
            </div>
            <div style={{ background: "#101114", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 20 }}>
              <div style={{ color: "#d1fe17", fontSize: 12, marginBottom: 8 }}>State</div>
              <div style={{ color: "#f4f4f5", fontSize: 24, fontWeight: 700 }}>Next.js 16</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

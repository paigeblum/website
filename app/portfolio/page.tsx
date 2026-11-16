import type { Metadata } from "next";
import PortfolioHero from "@/components/portfolio/PortfolioHero";

export const metadata: Metadata = {
  title: "Portfolio | Paige Blum",
  description: "Selected work by Paige Blum.",
  robots: { index: false, follow: false },
};

export default function PortfolioPage() {
  return (
    <main className="relative overflow-hidden">
      <PortfolioHero />

      {/* Work goes here. Each piece will be its own section. */}
      <section style={{ padding: "0 clamp(1.5rem, 6vw, 5rem) 8rem" }}>
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-dashed border-gray-300 bg-white/40 backdrop-blur-sm text-center text-sm text-gray-400"
            style={{ padding: "6rem 1.5rem" }}>
            selected work coming soon
          </div>
        </div>
      </section>
    </main>
  );
}

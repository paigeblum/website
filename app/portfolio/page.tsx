import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Paige Blum",
  description: "Selected work by Paige Blum.",
  robots: { index: false, follow: false },
};

export default function PortfolioPage() {
  return (
    <main className="px-6 sm:px-8 md:px-12 lg:px-20 pt-36 pb-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight">Portfolio</h1>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import Sidebar from "@/components/portfolio/Sidebar";
import "./portfolio.css";

const inter = Inter({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });
const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Portfolio | Paige Blum", template: "%s | Paige Blum" },
  description: "Selected work by Paige Blum.",
  robots: { index: false, follow: false },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.variable} ${instrumentSerif.variable} pf-root pf-shell`}>
      <Sidebar />
      <main className="pf-main">{children}</main>
    </div>
  );
}

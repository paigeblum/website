"use client";

import { motion } from "framer-motion";

const lights = [
  { color: "#ff6b6b", size: 320, x: "8%", y: "18%", delay: 0 },
  { color: "#6bb9f0", size: 380, x: "72%", y: "8%", delay: 1.5 },
  { color: "#9370db", size: 300, x: "58%", y: "62%", delay: 3 },
  { color: "#ffd93d", size: 220, x: "20%", y: "70%", delay: 4.5 },
];

export default function PortfolioHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center" style={{ padding: "8rem clamp(1.5rem, 6vw, 5rem) 4rem" }}>
      {/* Subtle drifting lights */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {lights.map((l, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: l.size,
              height: l.size,
              left: l.x,
              top: l.y,
              background: l.color,
              opacity: 0.12,
            }}
            animate={{ x: [0, 30, -20, 0], y: [0, -25, 15, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: l.delay }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto w-full">
        <motion.p
          className="text-xs tracking-[0.3em] uppercase text-gray-500"
          style={{ marginBottom: "1.5rem" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Paige Blum / selected work
        </motion.p>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="bg-gradient-to-r from-[#ff6b6b] via-[#9370db] to-[#f72585] bg-clip-text text-transparent">
            Portfolio
          </span>
        </motion.h1>

        {/* A single flowing line, like a path traced by a moving body */}
        <svg viewBox="0 0 800 120" className="w-full max-w-3xl overflow-visible" style={{ marginTop: "2.5rem" }} aria-hidden="true">
          <defs>
            <linearGradient id="portfolioLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff6b6b" />
              <stop offset="33%" stopColor="#ffd93d" />
              <stop offset="66%" stopColor="#6bb9f0" />
              <stop offset="100%" stopColor="#f72585" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 0 80 C 120 10, 200 110, 320 60 S 520 0, 620 70 S 760 100, 800 40"
            fill="none"
            stroke="url(#portfolioLine)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.8 }}
            transition={{ duration: 2.4, ease: "easeInOut", delay: 0.4 }}
          />
          <motion.circle
            r="5"
            fill="#f72585"
            initial={{ offsetDistance: "0%", opacity: 0 }}
            animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.4, ease: "easeInOut", delay: 0.4 }}
            style={{ offsetPath: "path('M 0 80 C 120 10, 200 110, 320 60 S 520 0, 620 70 S 760 100, 800 40')" }}
          />
        </svg>
      </div>
    </section>
  );
}

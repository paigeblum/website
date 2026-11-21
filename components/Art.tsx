"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { artworks } from "@/components/portfolio/content";

export default function Art() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Group pieces by row so each row shares one height.
  const rowNumbers = [...new Set(artworks.map((a) => a.row))].sort((x, y) => x - y);
  const rows = rowNumbers.map((n) => artworks.filter((a) => a.row === n));

  return (
    <section id="art" className="flex justify-center relative px-6 sm:px-8 md:px-12 lg:px-20 pb-4">
      <div className="max-w-4xl mx-auto w-full" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-center tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginTop: "6rem", marginBottom: "3rem" }}
        >
          <span className="bg-gradient-to-r from-[#ff6b6b] via-[#ff9f6b] via-[#ffd93d] via-[#6bcf7f] via-[#6bb9f0] via-[#9370db] to-[#f72585] bg-clip-text text-transparent">
            Painting and Stained Glass
          </span>
        </motion.h2>

        {rows.map((row, i) => (
          <motion.div
            key={i}
            className="flex flex-col sm:flex-row"
            style={{ gap: "1.5rem", marginBottom: "1.5rem" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
          >
            {row.map((a) => (
              <div
                key={a.src}
                className="min-w-0 sm:[flex:var(--ratio)_1_0%]"
                style={{ "--ratio": a.width / a.height } as React.CSSProperties}
              >
                <Image
                  src={a.src}
                  alt={a.alt}
                  width={a.width}
                  height={a.height}
                  className="block h-auto w-full rounded-2xl border border-gray-200"
                  sizes={`(min-width: 640px) ${Math.round(100 / row.length)}vw, 100vw`}
                />
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

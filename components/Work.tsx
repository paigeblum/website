"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const professionalWork = [
  {
    title: "Call of Duty: Black Ops 6",
    year: "2024",
    trailerLink: "https://www.youtube.com/watch?v=V69n6NnN5Fo"
  },
  {
    title: "Call of Duty: Modern Warfare III",
    year: "2023",
    trailerLink: "https://www.youtube.com/watch?v=qHi3NbfVqsE"
  },
];

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="min-h-screen flex items-center justify-center relative px-6 sm:px-8 md:px-12 lg:px-20 py-20">
      <div className="max-w-4xl mx-auto w-full" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-semibold mb-16 text-center tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-[#ff6b6b] via-[#ff9f6b] via-[#ffd93d] via-[#6bcf7f] via-[#6bb9f0] via-[#9370db] to-[#f72585] bg-clip-text text-transparent">
            Work
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {professionalWork.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="flex items-baseline justify-between"
            >
              <a
                href={work.trailerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl font-semibold text-gray-900 hover:text-[#f72585] transition-colors"
              >
                {work.title}
              </a>
              <span className="text-sm text-gray-400 font-normal ml-4">{work.year}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

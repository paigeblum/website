"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative px-6 sm:px-8 md:px-12 lg:px-20 py-20">
      <div className="max-w-3xl mx-auto w-full" ref={ref}>
        <motion.h2
          className="text-5xl md:text-6xl text-center tracking-tight font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <span className="bg-gradient-to-r from-[#ff6b6b] via-[#ff9f6b] via-[#ffd93d] via-[#6bcf7f] via-[#6bb9f0] via-[#9370db] to-[#f72585] bg-clip-text text-transparent">
            About
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="space-y-16"
        >
          <p className="text-lg md:text-xl text-gray-600 font-light" style={{ lineHeight: '1.8', marginBottom: '2rem' }}>
            I&apos;m a software engineer who believes the best technology balances innovation with responsibility.
            At Infinity Ward, I design real time AI systems for Call of Duty, building experiences that reach
            over 100 million players while staying grounded in thoughtful, ethical design.
          </p>

          <p className="text-lg md:text-xl text-gray-600 font-light" style={{ lineHeight: '1.8', marginBottom: '2rem' }}>
            My work spans scalable backend systems, applied machine learning, and strategic problem solving.
            I&apos;ve built recommendation engines, full stack analytics platforms, and ETL pipelines across AAA
            gaming, startups, and analytics. I work with Python, C++, Java, SQL, TensorFlow, PyTorch, and Next.js, but
            I care as much about the why behind a system as the how.
          </p>

          <p className="text-lg md:text-xl text-gray-600 font-light" style={{ lineHeight: '1.8' }}>
            Beyond production systems, I love exploring AI&apos;s creative potential, from generative album art
            to lyric generation models. I&apos;m driven by the belief that technology should empower people,
            not replace them, and I bring that mindset to every project I touch.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Name with butterfly */}
          <div className="mb-12">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="bg-gradient-to-r from-[#ff6b6b] via-[#ff9f6b] via-[#ffd93d] via-[#6bcf7f] via-[#6bb9f0] via-[#9370db] to-[#f72585] bg-clip-text text-transparent">
                Paige Blum
              </span>
            </motion.h1>

            {/* Butterfly SVG */}
            <motion.div
              className="hidden sm:block absolute -right-16 md:-right-24 top-0 md:top-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.svg
                width="60"
                height="60"
                viewBox="0 0 100 100"
                className="w-12 h-12 md:w-16 md:h-16"
                animate={{
                  y: [0, -8, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <defs>
                  <linearGradient id="butterflyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff6b6b" />
                    <stop offset="16%" stopColor="#ff9f6b" />
                    <stop offset="33%" stopColor="#ffd93d" />
                    <stop offset="50%" stopColor="#6bcf7f" />
                    <stop offset="66%" stopColor="#6bb9f0" />
                    <stop offset="83%" stopColor="#9370db" />
                    <stop offset="100%" stopColor="#f72585" />
                  </linearGradient>
                </defs>

                {/* Left wing */}
                <path
                  d="M 50 50 Q 20 30, 15 45 Q 10 60, 25 65 Q 35 68, 50 50"
                  fill="url(#butterflyGradient)"
                  opacity="0.9"
                  stroke="url(#butterflyGradient)"
                  strokeWidth="1.5"
                />
                <path
                  d="M 50 50 Q 25 60, 20 75 Q 15 90, 30 92 Q 40 93, 50 50"
                  fill="url(#butterflyGradient)"
                  opacity="0.8"
                  stroke="url(#butterflyGradient)"
                  strokeWidth="1.5"
                />

                {/* Right wing */}
                <path
                  d="M 50 50 Q 80 30, 85 45 Q 90 60, 75 65 Q 65 68, 50 50"
                  fill="url(#butterflyGradient)"
                  opacity="0.9"
                  stroke="url(#butterflyGradient)"
                  strokeWidth="1.5"
                />
                <path
                  d="M 50 50 Q 75 60, 80 75 Q 85 90, 70 92 Q 60 93, 50 50"
                  fill="url(#butterflyGradient)"
                  opacity="0.8"
                  stroke="url(#butterflyGradient)"
                  strokeWidth="1.5"
                />

                {/* Body */}
                <ellipse
                  cx="50"
                  cy="50"
                  rx="3"
                  ry="15"
                  fill="url(#butterflyGradient)"
                />

                {/* Antennae */}
                <path
                  d="M 48 35 Q 45 25, 42 20"
                  stroke="url(#butterflyGradient)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 52 35 Q 55 25, 58 20"
                  stroke="url(#butterflyGradient)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="42" cy="20" r="2" fill="url(#butterflyGradient)" />
                <circle cx="58" cy="20" r="2" fill="url(#butterflyGradient)" />
              </motion.svg>
            </motion.div>
          </div>

          {/* Tagline */}
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl text-gray-900 mb-6 font-normal leading-snug"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Engineer driven by creativity and ethics, building experiences that reach millions
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 font-light mb-16 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            My work blends coding, AI, and strategic thinking to empower teams, improve workflows, and create impactful technology for real users.
          </motion.p>

          {/* Icon navigation */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-900 sm:w-6 sm:h-6">
                <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" rx="1"/>
                <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" rx="1"/>
                <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" rx="1"/>
                <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" rx="1"/>
              </svg>
              <span className="text-sm sm:text-base font-medium text-gray-900">See My Work</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-900 sm:w-6 sm:h-6">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
                <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2"/>
                <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2"/>
                <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span className="text-sm sm:text-base font-medium text-gray-900">Resume</span>
            </a>

            <a
              href="#contact"
              className="group flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-900 sm:w-6 sm:h-6">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span className="text-sm sm:text-base font-medium text-gray-900">Get in Touch</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
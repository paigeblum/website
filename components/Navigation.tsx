"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 py-6">
        <div className="flex justify-between items-center">
          {/* Butterfly Logo */}
          <a href="#" className="flex items-center hover:opacity-80 transition-opacity">
            <svg
              width="40"
              height="40"
              viewBox="0 0 100 100"
              className="w-8 h-8 md:w-10 md:h-10"
            >
              <defs>
                <linearGradient id="navButterflyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
                fill="url(#navButterflyGradient)"
                opacity="0.9"
                stroke="url(#navButterflyGradient)"
                strokeWidth="1.5"
              />
              <path
                d="M 50 50 Q 25 60, 20 75 Q 15 90, 30 92 Q 40 93, 50 50"
                fill="url(#navButterflyGradient)"
                opacity="0.8"
                stroke="url(#navButterflyGradient)"
                strokeWidth="1.5"
              />

              {/* Right wing */}
              <path
                d="M 50 50 Q 80 30, 85 45 Q 90 60, 75 65 Q 65 68, 50 50"
                fill="url(#navButterflyGradient)"
                opacity="0.9"
                stroke="url(#navButterflyGradient)"
                strokeWidth="1.5"
              />
              <path
                d="M 50 50 Q 75 60, 80 75 Q 85 90, 70 92 Q 60 93, 50 50"
                fill="url(#navButterflyGradient)"
                opacity="0.8"
                stroke="url(#navButterflyGradient)"
                strokeWidth="1.5"
              />

              {/* Body */}
              <ellipse
                cx="50"
                cy="50"
                rx="3"
                ry="15"
                fill="url(#navButterflyGradient)"
              />

              {/* Antennae */}
              <path
                d="M 48 35 Q 45 25, 42 20"
                stroke="url(#navButterflyGradient)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 52 35 Q 55 25, 58 20"
                stroke="url(#navButterflyGradient)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="42" cy="20" r="2" fill="url(#navButterflyGradient)" />
              <circle cx="58" cy="20" r="2" fill="url(#navButterflyGradient)" />
            </svg>
          </a>

          {/* Nav items */}
          <div className="flex items-center gap-12">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                className="text-sm font-medium text-gray-900 hover:text-[#f72585] transition-colors relative group tracking-wide uppercase"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#f72585] transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const contactLinks = [
  {
    name: "Email",
    value: "paigemblum@gmail.com",
    href: "mailto:paigemblum@gmail.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/paige-blum",
    href: "https://linkedin.com/in/paige-blum",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    value: "github.com/paigeblum",
    href: "https://github.com/paigeblum",
    icon: Github,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center relative px-6 sm:px-8 md:px-12 lg:px-20 py-20">
      <div className="max-w-4xl mx-auto w-full" ref={ref}>
        <motion.h2
          className="text-5xl md:text-6xl mb-24 text-center tracking-tight font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-[#ff6b6b] via-[#ff9f6b] via-[#ffd93d] via-[#6bcf7f] via-[#6bb9f0] via-[#9370db] to-[#f72585] bg-clip-text text-transparent">
            Get in Touch
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-10"
        >
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group p-10 border border-gray-200 rounded-2xl hover:border-[#f72585] hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 hover:scale-105"
            >
              <link.icon size={32} className="text-gray-400 group-hover:text-[#f72585] transition-colors mb-4" />
              <div className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wider">{link.name}</div>
              <div className="text-base text-gray-900 font-medium group-hover:text-[#f72585] transition-colors break-all">
                {link.value}
              </div>
            </a>
          ))}
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-10 border-t border-gray-200 text-center"
        >
          <p className="text-gray-400 text-sm font-normal">
            © {new Date().getFullYear()} Paige Blum
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
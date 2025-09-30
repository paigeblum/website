"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
}

const rainbowColors = [
  "#ff6b6b", // red
  "#ff9f6b", // orange
  "#ffd93d", // yellow
  "#6bcf7f", // green
  "#6bb9f0", // blue
  "#9370db", // purple
  "#f72585", // pink
];

export default function CursorTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    let particleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const randomColor = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];

      const newParticle: Particle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
        color: randomColor,
      };

      setParticles((prev) => [...prev, newParticle]);

      // Remove particle after animation
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              x: particle.x - 10,
              y: particle.y - 10,
              scale: 0,
              opacity: 1,
            }}
            animate={{
              scale: [0, 1.5, 1],
              opacity: [1, 0.8, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute w-5 h-5"
            style={{
              left: 0,
              top: 0,
            }}
          >
            {/* Flower/petal shape with random color */}
            <svg viewBox="0 0 20 20" className="w-full h-full">
              <path
                d="M10,10 Q12,8 10,6 Q8,8 10,10 Q12,12 10,14 Q8,12 10,10 Q8,8 6,10 Q8,12 10,10 Q12,8 14,10 Q12,12 10,10"
                fill={particle.color}
                stroke={particle.color}
                strokeWidth="0.5"
              />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
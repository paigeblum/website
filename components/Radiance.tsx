'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import type p5 from 'p5';

export default function Radiance() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sketchRef = useRef<p5 | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!containerRef.current || sketchRef.current) return;

    // Dynamic import to avoid server-side rendering issues
    import('p5').then((p5Module) => {
      const P5 = p5Module.default;

      const sketch = (p: p5) => {
        p.setup = () => {
          const width = containerRef.current?.offsetWidth || 800;
          const height = Math.floor(width * 0.5625); // 16:9 aspect ratio
          p.createCanvas(width, height);
          p.background(0);
        };

        p.draw = () => {
          p.stroke(p.random(255), p.random(255), p.random(255));
          p.line(p.width / 2, p.height / 2, p.random(p.width), p.random(p.height));
          p.fill(0);
          p.ellipse(p.random(p.width), p.random(p.height), p.random(20), p.random(20));
        };
      };

      sketchRef.current = new P5(sketch, containerRef.current!);
    });

    return () => {
      sketchRef.current?.remove();
      sketchRef.current = null;
    };
  }, []);

  const toggleAnimation = () => {
    if (!sketchRef.current) return;
    if (isPlaying) {
      sketchRef.current.noLoop();
    } else {
      sketchRef.current.loop();
    }
    setIsPlaying(!isPlaying);
  };

  const restartAnimation = () => {
    if (!sketchRef.current) return;
    sketchRef.current.clear();
    sketchRef.current.background(0);
    if (!isPlaying) {
      sketchRef.current.loop();
      setIsPlaying(true);
    }
  };

  return (
    <section id="digital-art" className="flex justify-center relative px-6 sm:px-8 md:px-12 lg:px-20 pt-64 pb-4">
      <div className="max-w-4xl mx-auto w-full" ref={sectionRef}>
        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-center tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginTop: '10rem', marginBottom: '3rem' }}
        >
          <span className="bg-gradient-to-r from-[#ff6b6b] via-[#ff9f6b] via-[#ffd93d] via-[#6bcf7f] via-[#6bb9f0] via-[#9370db] to-[#f72585] bg-clip-text text-transparent">
            Digital Artwork
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div className="flex items-baseline gap-4" style={{ marginBottom: '1rem' }}>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
              Radiance
            </h3>
            <button
              onClick={toggleAnimation}
              className="text-sm text-[#f72585] hover:underline font-medium"
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button
              onClick={restartAnimation}
              className="text-sm text-gray-900 hover:underline font-medium"
            >
              Restart
            </button>
          </div>
          <div ref={containerRef} className="w-full" />
        </motion.div>
      </div>
    </section>
  );
}

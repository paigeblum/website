"use client";

import { useEffect, useRef, useState } from "react";
import type p5 from "p5";

// The same sketch as the homepage "Radiance" piece, without the section wrapper.
export default function RadianceCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sketchRef = useRef<p5 | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || sketchRef.current) return;
    let cancelled = false;

    import("p5").then((p5Module) => {
      if (cancelled) return;
      const P5 = p5Module.default;
      const sketch = (p: p5) => {
        p.setup = () => {
          const width = container.offsetWidth || 800;
          p.createCanvas(width, Math.floor(width * 0.5625));
          p.background(0);
        };
        p.draw = () => {
          p.stroke(p.random(255), p.random(255), p.random(255));
          p.line(p.width / 2, p.height / 2, p.random(p.width), p.random(p.height));
          p.fill(0);
          p.ellipse(p.random(p.width), p.random(p.height), p.random(20), p.random(20));
        };
      };
      sketchRef.current = new P5(sketch, container);
    });

    return () => {
      cancelled = true;
      sketchRef.current?.remove();
      sketchRef.current = null;
    };
  }, []);

  const toggle = () => {
    if (!sketchRef.current) return;
    if (isPlaying) sketchRef.current.noLoop();
    else sketchRef.current.loop();
    setIsPlaying(!isPlaying);
  };

  const restart = () => {
    if (!sketchRef.current) return;
    sketchRef.current.clear();
    sketchRef.current.background(0);
    if (!isPlaying) {
      sketchRef.current.loop();
      setIsPlaying(true);
    }
  };

  return (
    <div>
      <div ref={containerRef} className="w-full overflow-hidden rounded-2xl bg-black" style={{ aspectRatio: "16 / 9" }} />
      <div className="flex gap-4 text-sm" style={{ marginTop: "0.75rem" }}>
        <button onClick={toggle} className="text-[#f72585] hover:underline font-medium">
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={restart} className="text-gray-900 hover:underline font-medium">
          Restart
        </button>
      </div>
    </div>
  );
}

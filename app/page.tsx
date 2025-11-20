"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Radiance from "@/components/Radiance";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Radiance />
      <Contact />
    </main>
  );
}

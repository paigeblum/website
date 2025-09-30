"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const professionalWork = [
  {
    title: "Call of Duty: Black Ops 6",
    year: "2024",
    trailerLink: "https://www.callofduty.com/blackops6"
  },
  {
    title: "Call of Duty: Modern Warfare III",
    year: "2023",
    trailerLink: "https://www.callofduty.com/store/games/modernwarfare3"
  },
];

const projects = [
  {
    title: "Sponsor Analytics Platform",
    description: "Sample analytics platform for tracking brand investment performance and sponsor engagement. Features real-time event tracking, data visualization, and performance metrics to measure sponsorship ROI.",
    year: "2025",
    tags: ["React", "Analytics", "Data Visualization", "Vercel", "Web Development"],
    demoLink: "https://sponsor-analytics.vercel.app/#/events",
    githubLink: "https://github.com/paigeblum/sponsor-analytics",
    demoLabel: "View Demo",
    type: "personal"
  },
  {
    title: "Interactive Map Application",
    description: "Full-stack web application featuring interactive geographical visualization with real-time data rendering and user-driven exploration capabilities.",
    year: "2025",
    tags: ["Next.js", "React", "TypeScript", "Vercel", "Web Development"],
    demoLink: "https://interactive-map-silk.vercel.app/",
    githubLink: "https://github.com/paigeblum/interactive-map",
    demoLabel: "View Demo",
    type: "personal"
  },
  {
    title: "What Makes an Image Steerable?",
    description: "Senior thesis investigating predictability of image steerability in text-to-image AI models using CNNs and linear regression. Analyzed feature importance in generative AI interactions, revealing key insights into how real vs. AI-generated images affect model steering capabilities.",
    year: "2024",
    tags: ["Computer Vision", "CNNs", "Machine Learning", "Research", "PyTorch"],
    demoLink: "/thesis.pdf",
    githubLink: "/thesis-poster.pptx",
    demoLabel: "Read Thesis",
    githubLabel: "View Poster",
    type: "personal"
  },
  {
    title: "Lyric Generation with RNNs",
    description: "Long short-term memory model for creative song lyric generation using recurrent neural networks. Trained on diverse musical genres to generate contextually coherent lyrics.",
    year: "2023",
    tags: ["Python", "TensorFlow", "NLP", "RNN", "Deep Learning"],
    demoLink: "https://medium.com/@paigemblum/lyric-generation-with-recurrent-neural-networks-dfedfc0b7d33",
    githubLink: "https://github.com/gillianfeder/SongLyricsML",
    demoLabel: "Read Article",
    type: "personal"
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center relative px-6 sm:px-8 md:px-12 lg:px-20 py-20">
      <div className="max-w-4xl mx-auto w-full" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-semibold mb-16 text-center tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-[#ff6b6b] via-[#ff9f6b] via-[#ffd93d] via-[#6bcf7f] via-[#6bb9f0] via-[#9370db] to-[#f72585] bg-clip-text text-transparent">
            Selected Projects
          </span>
        </motion.h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {/* Title and Year */}
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <span className="text-sm text-gray-400 font-normal">{project.year}</span>
              </div>

              {/* Description */}
              <p className="text-base text-gray-600 font-light leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex gap-4 text-sm">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f72585] hover:underline font-medium"
                  >
                    {project.demoLabel || "View Demo"} →
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:underline font-medium"
                  >
                    {project.githubLabel || "View Code"} →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Work - No Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-32 space-y-8"
        >
          {professionalWork.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
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
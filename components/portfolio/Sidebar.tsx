"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { groups, projects } from "./content";

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // /portfolio itself shows the first project.
  const activeSlug =
    pathname === "/portfolio" || pathname === "/portfolio/"
      ? projects[0].slug
      : pathname?.replace(/^\/portfolio\//, "").replace(/\/$/, "");

  return (
    <aside className="pf-side" data-open={open}>
      <Link href="/" className="pf-brand">
        <div className="pf-name">Paige Blum</div>
        <p className="pf-role">AI gameplay engineer at Infinity Ward. I program how characters in Call of Duty behave.</p>
      </Link>

      <svg viewBox="0 0 240 24" className="pf-line" aria-hidden="true">
        <path
          d="M 0 14 C 40 0, 70 24, 110 12 S 190 2, 240 12"
          fill="none"
          stroke="#f72585"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      <button
        type="button"
        className="pf-menu-btn"
        aria-expanded={open}
        aria-controls="pf-projects"
        onClick={() => setOpen(!open)}
      >
        {open ? "Hide projects" : "All projects"}
      </button>

      <nav id="pf-projects" aria-label="Projects" className="pf-nav">
        {groups.map((g) => (
          <div key={g.label} className="pf-group">
            <span className="pf-group-label pf-mono">{g.label}</span>
            {g.slugs.map((slug) => {
              const p = projects.find((x) => x.slug === slug);
              if (!p) return null;
              const current = p.slug === activeSlug;
              return (
                <Link
                  key={p.slug}
                  href={`/portfolio/${p.slug}`}
                  className="pf-item"
                  aria-current={current ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  <Image
                    src={p.thumb.src}
                    alt=""
                    width={76}
                    height={76}
                    className={`pf-thumb${p.thumb.fit === "contain" ? " pf-thumb--contain" : ""}`}
                    unoptimized={p.thumb.src.endsWith(".svg")}
                  />
                  <span className="pf-item-text">
                    <span className="pf-item-name">{p.name}</span>
                    <span className="pf-item-desc">{p.desc}</span>
                  </span>
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      <div className="pf-side-foot">
        <a href="/resume.pdf">Resume</a>
        <Link href="/#contact">Contact</Link>
      </div>
    </aside>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { groups, projects } from "./content";

export default function Sidebar() {
  const pathname = usePathname();

  const activeSlug = pathname?.replace(/^\/portfolio\/?/, "").replace(/\/$/, "");

  return (
    <aside className="pf-side">
      <Link href="/portfolio" className="pf-brand">
        <div className="pf-name">Paige Blum</div>
      </Link>
      <Link href="/portfolio/about" className="pf-about-link" aria-current={activeSlug === "about" ? "page" : undefined}>
        About
      </Link>

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
                 
                >
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
        <a href="mailto:paigemblum@gmail.com">Contact</a>
      </div>
    </aside>
  );
}

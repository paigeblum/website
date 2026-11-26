import Link from "next/link";
import { groups, projects } from "@/components/portfolio/content";

// The landing page: one idea, then the list.
export default function PortfolioHome() {
  return (
    <div className="pf-home">
      <svg viewBox="0 0 240 24" className="pf-home-line" aria-hidden="true">
        <path d="M 0 14 C 40 0, 70 24, 110 12 S 190 2, 240 12" fill="none" stroke="#f72585" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <h1 className="pf-statement">
        I build systems that behave <em>like they&rsquo;re alive.</em>
      </h1>
      <p className="pf-statement-sub">
        By day, the AI behind characters in Call of Duty. Beyond it, prototypes, research and art that ask the same
        question: how does something move, respond and decide?
      </p>

      <div className="pf-index">
        {groups.map((g) => (
          <section key={g.label} className="pf-index-group">
            <h2 className="pf-mono">{g.label}</h2>
            <ul>
              {g.slugs.map((slug) => {
                const p = projects.find((x) => x.slug === slug);
                if (!p) return null;
                return (
                  <li key={p.slug}>
                    <Link href={`/portfolio/${p.slug}`}>
                      <span className="pf-index-name">{p.name}</span>
                      <span className="pf-index-desc">{p.lede}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

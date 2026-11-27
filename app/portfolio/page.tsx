import Image from "next/image";
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

      <ul className="pf-cards">
        {groups.flatMap((g) =>
          g.slugs.map((slug) => {
            const p = projects.find((x) => x.slug === slug);
            if (!p) return null;
            const m = p.hero?.media ?? p.gallery?.[0]?.[0]?.media;
            const img = m ? (m.type === "video" ? m.poster : m.src) : undefined;
            return (
              <li key={p.slug}>
                <Link href={`/portfolio/${p.slug}`} className="pf-card">
                  <span className={`pf-card-img${["foot-phase","battle-chatter","dancing-leg","steerable-images","lyric-rnns"].includes(p.slug) ? " pf-fit" : ""}`}>
                    {img && <Image src={img} alt="" fill sizes="(max-width: 900px) 50vw, 260px" />}
                  </span>
                  <span className="pf-mono pf-card-group">{g.label}</span>
                  <span className="pf-index-name">{p.name}</span>
                </Link>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}

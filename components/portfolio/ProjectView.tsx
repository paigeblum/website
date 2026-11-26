import Image from "next/image";
import Link from "next/link";
import RadianceCanvas from "./RadianceCanvas";
import { getNeighbors, projects, type Figure, type Project } from "./content";

function FigureView({ figure }: { figure: Figure }) {
  const { media, caption } = figure;
  return (
    <figure className="pf-fig">
      {media.type === "video" ? (
        <video
          src={media.src}
          poster={media.poster}
          aria-label={media.alt}
          controls
          playsInline
          preload="none"
        />
      ) : (
        <a href={media.src} target="_blank" rel="noopener noreferrer" title="Open full size">
          <Image
            src={media.src}
            alt={media.alt}
            width={media.width ?? 1600}
            height={media.height ?? 900}
            sizes="(min-width: 901px) 700px, 100vw"
            unoptimized={media.src.endsWith(".gif") || media.src.endsWith(".svg")}
          />
        </a>
      )}
      <figcaption className="pf-cap">{caption}</figcaption>
    </figure>
  );
}

export default function ProjectView({ project }: { project: Project }) {
  const { index, next } = getNeighbors(project.slug);

  return (
    <article className="pf-article">
      <span className="pf-kind pf-mono">{project.kind}</span>
      <h1 className="pf-title">{project.name}</h1>
      <p className="pf-lede">{project.lede}</p>

      <FigureView figure={project.hero} />

      {project.tags && (
        <ul className="pf-tags pf-mono" aria-label="Built with">
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      )}

      <details className="pf-deeper">
        <summary>
          <span className="pf-mono">Go deeper</span>
          <span className="pf-deeper-hint">The full story, step by step</span>
        </summary>
      <div className="pf-rows">
        {project.rows.map((row) => (
          <div key={row.label} style={{ display: "contents" }}>
            <span className="pf-row-label pf-mono">{row.label}</span>
            <span className="pf-row-text">{row.text}</span>
          </div>
        ))}
      </div>

      {project.more && (
        <div className="pf-more">
          {project.more.map((fig) => (
            <FigureView key={fig.media.src} figure={fig} />
          ))}
        </div>
      )}

      </details>

      {project.radiance && (
        <div className="pf-radiance">
          <RadianceCanvas />
          <p className="pf-cap">{project.radiance.caption}</p>
        </div>
      )}

      {project.links && (
        <div className="pf-links">
          {project.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="pf-link">
              {l.label} →
            </a>
          ))}
        </div>
      )}

      <div className="pf-foot">
        <span className="pf-count pf-mono">
          Project {index + 1} of {projects.length}
        </span>
        <Link href={`/portfolio/${next.slug}`} className="pf-next">
          Next: {next.name} →
        </Link>
      </div>
    </article>
  );
}

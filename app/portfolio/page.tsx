import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import RadianceCanvas from "@/components/portfolio/RadianceCanvas";
import { groups, paintings, type Piece } from "@/components/portfolio/content";

export const metadata: Metadata = {
  title: "Portfolio | Paige Blum",
  description: "Selected work by Paige Blum.",
  robots: { index: false, follow: false },
};

const gutter = "clamp(1.5rem, 6vw, 5rem)";

function Media({ piece }: { piece: Piece }) {
  if (piece.media?.type === "video") {
    return (
      <video
        src={piece.media.src}
        aria-label={piece.media.alt}
        className="w-full rounded-2xl bg-black"
        style={{ aspectRatio: "16 / 9" }}
        controls
        muted
        loop
        playsInline
        preload="metadata"
      />
    );
  }
  if (piece.media?.type === "image") {
    return (
      <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "16 / 9" }}>
        <Image src={piece.media.src} alt={piece.media.alt} fill className="object-cover" sizes="(min-width: 768px) 60vw, 100vw" />
      </div>
    );
  }
  return (
    <div
      className="flex w-full items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white/40 text-center text-xs text-gray-400"
      style={{ aspectRatio: "16 / 9", padding: "1.5rem" }}
    >
      {piece.placeholder}
    </div>
  );
}

function PieceRow({ piece }: { piece: Piece }) {
  return (
    <article className="grid items-start md:grid-cols-5" style={{ gap: "2rem", marginBottom: "4.5rem" }}>
      <div className="md:col-span-3">
        <Media piece={piece} />
      </div>
      <div className="md:col-span-2">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{piece.title}</h3>
        <p className="text-xs uppercase tracking-widest text-gray-400" style={{ marginTop: "0.5rem" }}>
          {piece.meta}
          {piece.status && <span className="text-[#f72585]"> / {piece.status}</span>}
        </p>
        <p className="text-base font-light leading-relaxed text-gray-600" style={{ marginTop: "1rem" }}>
          {piece.description}
        </p>
        {piece.links && (
          <div className="flex flex-wrap text-sm" style={{ gap: "1rem", marginTop: "1rem" }}>
            {piece.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#f72585] hover:underline"
              >
                {l.label} →
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function GroupHeading({ title, note }: { title: string; note?: string }) {
  return (
    <div className="border-t border-gray-200" style={{ paddingTop: "2rem", marginBottom: "3rem" }}>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">{title}</h2>
      {note && (
        <p className="text-sm text-gray-500" style={{ marginTop: "0.75rem" }}>
          {note}
        </p>
      )}
    </div>
  );
}

export default function PortfolioPage() {
  const index = [...groups.map((g) => ({ id: g.id, title: g.title })), { id: "art", title: "Art" }];

  return (
    <main className="relative overflow-hidden">
      <PortfolioHero />

      <div style={{ padding: `0 ${gutter} 6rem` }}>
        <div className="mx-auto max-w-5xl">
          {/* Jump links */}
          <nav className="flex flex-wrap text-sm text-gray-500" style={{ gap: "1.5rem", marginBottom: "5rem" }}>
            {index.map((i) => (
              <a key={i.id} href={`#${i.id}`} className="hover:text-[#f72585]">
                {i.title}
              </a>
            ))}
          </nav>

          {groups.map((group) => (
            <section key={group.id} id={group.id} style={{ scrollMarginTop: "6rem", marginBottom: "3rem" }}>
              <GroupHeading title={group.title} note={group.note} />
              {group.pieces.map((piece) => (
                <PieceRow key={piece.title} piece={piece} />
              ))}
            </section>
          ))}

          <section id="art" style={{ scrollMarginTop: "6rem" }}>
            <GroupHeading title="Art" />
            <div style={{ marginBottom: "3rem" }}>
              <RadianceCanvas />
              <p className="text-sm text-gray-500" style={{ marginTop: "0.5rem" }}>
                Radiance. Generative, p5.js.
              </p>
            </div>
            <div className="grid sm:grid-cols-3" style={{ gap: "1rem" }}>
              {paintings.map((p, i) =>
                p.src ? (
                  <div key={i} className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "4 / 5" }}>
                    <Image src={p.src} alt={p.title} fill className="object-cover" sizes="(min-width: 640px) 30vw, 100vw" />
                  </div>
                ) : (
                  <div
                    key={i}
                    className="flex items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white/40 text-xs text-gray-400"
                    style={{ aspectRatio: "4 / 5" }}
                  >
                    {p.title}
                  </div>
                )
              )}
            </div>
          </section>

          <footer
            className="flex flex-wrap border-t border-gray-200 text-sm text-gray-500"
            style={{ gap: "1.5rem", marginTop: "6rem", paddingTop: "2rem" }}
          >
            <a href="/resume.pdf" className="hover:text-[#f72585]">
              Resume
            </a>
            <Link href="/#contact" className="hover:text-[#f72585]">
              Contact
            </Link>
          </footer>
        </div>
      </div>
    </main>
  );
}

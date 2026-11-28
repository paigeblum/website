import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <article className="pf-article pf-about">
      <h1 className="pf-title">About</h1>

      <div className="pf-about-hero">
        <div className="pf-about-shot">
          <Image src="/portfolio/about/portrait.jpg" alt="Paige Blum" fill sizes="(max-width: 900px) 50vw, 340px" priority />
        </div>
        <div className="pf-about-shot">
          <Image src="/portfolio/art/glass-making.jpg" alt="Paige making a glass pendant at the torch" fill sizes="(max-width: 900px) 50vw, 340px" />
        </div>
      </div>

      <div className="pf-about-text">
        <p>
          I&rsquo;m <strong>Paige Blum</strong>, an <strong>AI gameplay engineer at Infinity Ward</strong>. I program how
          characters in Call of Duty: Modern Warfare 4 think, move and talk.
        </p>
        <p>
          I studied computer science at Colgate, but the way I look at my work comes from other places. I danced{" "}
          <strong>ballet for eleven years</strong>, which taught me to watch how a body moves and what makes a movement
          read as alive.
        </p>
        <p>
          I got into computer science through a middle school robotics elective and ended up{" "}
          <strong>captaining my school&rsquo;s first all-female robotics team</strong>. Today I{" "}
          <strong>co-lead Infinity Ward&rsquo;s Women in Gaming group</strong>.
        </p>
        <p>
          Outside of work I <strong>paint watercolors, make stained glass and glass pendants, and write code that makes
          art</strong>.
        </p>
        <p className="pf-about-links">
          <a href="/resume.pdf">Resume (PDF)</a>
          <a href="mailto:paigemblum@gmail.com">paigemblum@gmail.com</a>
        </p>
      </div>
    </article>
  );
}

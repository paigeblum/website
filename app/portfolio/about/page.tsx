import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <article className="pf-article pf-about">
      <span className="pf-kind pf-mono">About</span>
      <div className="pf-about-top">
        <div className="pf-about-photo">
          <Image src="/portfolio/about/portrait.jpg" alt="Paige Blum" fill sizes="220px" priority />
        </div>
        <div>
          <h1 className="pf-title">Paige Blum</h1>
          <p className="pf-lede">
            I&rsquo;m an AI gameplay engineer at Infinity Ward. I program how characters in Call of Duty: Modern Warfare 4 think,
            move and talk.
          </p>
        </div>
      </div>

      <div className="pf-prose">
        <div>
          <p>
            I studied computer science at Colgate, but the way I look at my work comes from other places. I danced
            Russian Vaganova style ballet for eleven years, which is where I learned to watch how a body moves and what makes a movement read
            as alive.
          </p>
        </div>
        <div>
          <p>
            I got into computer science through a middle school robotics elective and ended up captaining my
            school&rsquo;s first all-female robotics team. Today I co-lead Infinity Ward&rsquo;s Women in Gaming
            group.
          </p>
        </div>
        <div>
          <p>
            Outside of work I paint watercolors, make stained glass and glass pendants, and write code that makes art.
          </p>
        </div>
      </div>
    </article>
  );
}

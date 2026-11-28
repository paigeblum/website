import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <article className="pf-article pf-about">
      <span className="pf-kind pf-mono">About</span>
      <div className="pf-about-top">
        <div className="pf-about-photo">
          <Image
            src="/portfolio/about/portrait.jpg"
            alt="Paige Blum"
            fill
            sizes="220px"
            priority
          />
        </div>
        <div>
          <h1 className="pf-title">Paige Blum</h1>
          <p className="pf-lede">
            I&rsquo;m an <strong>AI gameplay engineer at Infinity Ward</strong>.
            I program how characters in Call of Duty: Modern Warfare 4 think,
            move and talk.
          </p>
        </div>
      </div>

      <div className="pf-prose">
        <div>
          <p>
            I studied <strong>computer science at Colgate</strong> and danced{" "}
            <strong>Russian Vaganova style ballet for eleven years</strong>,
            which is where I learned to see what makes a movement look alive. I
            care most about <strong>characters people get attached to</strong>{" "}
            and{" "}
            <strong>
              tools that help artists without taking decisions away from them
            </strong>
            . Outside of work I paint, make stained glass and write code that
            makes art.
          </p>
        </div>
        <div>
          <p>
            My <a href="/resume.pdf">resume (PDF)</a> has the rest, or you can
            write to me at{" "}
            <a href="mailto:paigemblum@gmail.com">paigemblum@gmail.com</a>.
          </p>
        </div>
      </div>
    </article>
  );
}

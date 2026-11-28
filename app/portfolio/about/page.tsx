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
            I&rsquo;m an AI gameplay engineer at Infinity Ward. I program how
            characters in Call of Duty: Modern Warfare 4 think, move and talk.
          </p>
        </div>
      </div>

      <div className="pf-prose">
        <div>
          <p>
            What I love most about my job is the moment a player stops thinking
            of a character as code. A dog that circles and flanks, a soldier who
            calls out what he sees: when it works, people get attached to them.
            I want to keep building characters that people care about.
          </p>
        </div>
        <div>
          <p>
            A lot of how I see that comes from ballet. I danced Russian Vaganova
            style ballet for eleven years, which is where I learned to watch how
            a body moves and what makes a movement read as alive. It is why I
            built a tool for foot placement in animation, and why I am now
            studying how a dancer&rsquo;s foot moves.
          </p>
        </div>
        <div>
          <p>
            I also care about who the tools are for. At Infinity Ward I like
            building systems that take the tedious work off artists and
            designers without taking the decisions away from them. The same idea
            runs through my card companion prototype, where a child practices
            communication and the therapist stays in charge of what it says.
          </p>
        </div>
        <div>
          <p>
            I got into computer science through a middle school robotics
            elective and ended up captaining my school&rsquo;s first all-female
            robotics team, then studied it at Colgate. Today I co-lead Infinity
            Ward&rsquo;s Women in Gaming group.
          </p>
        </div>
        <div>
          <p>
            Outside of work I paint watercolors, make stained glass and glass
            pendants, and write code that makes art. I like making things from
            scratch, and I want my work to be about creating, not copying.
          </p>
        </div>
      </div>
    </article>
  );
}

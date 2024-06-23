import Wrapper from "../components/Wrapper";
import SectionHeading from "../components/SectionHeading";
import InnerLink from "../components/InnerLink";
import Label from "../components/Label";
import Link from "next/link";

import { Inter, Lato, Lumanosimo } from "next/font/google";

export default function Projects() {
  return (
    <Wrapper>
      <div className="md:flex">
        <div className="">
          <header className="mb-8 group">
            <h1 className="mb-1 font-mono text-4xl font-semibold text-subhead-light dark:text-subhead-dark md:text-5xl">
              <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
                my PROJECTS
              </span>
              <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-gray-700 dark:bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
            </h1>
          </header>
        </div>
      </div>
      <section>
        <ul className="list-disc space-y-3">
          <li>
            <p>
              <InnerLink
                href="https://judithlk.github.io/book-finder/"
                target="_blank"
              >
                Book Finder app
              </InnerLink>
              : Search any book and get information on it <br />{" "}
              <InnerLink
                href="https://github.com/judithlk/book-finder"
                target="_blank"
              >
                Github repo
              </InnerLink>
            </p>
            <div>
              <Label title="React JS" />
              <Label title="CSS" />
              <Label title="APIs" />
            </div>
          </li>

          <li>
            <p>
              <InnerLink
                href="https://judithlk.github.io/tic-tac-toe-game/"
                target="_blank"
              >
                Tic Tac Toe game
              </InnerLink>
              : A simple tic-tac-toe game. <br />{" "}
              <InnerLink
                href="https://github.com/judithlk/tic-tac-toe-game"
                target="_blank"
              >
                Github Repo
              </InnerLink>
            </p>
            <div>
              <Label title="HTML" />
              <Label title="CSS" />
              <Label title="JavaScript" />
            </div>
          </li>

          <li>
            <p>
              <InnerLink
                href="https://judithlk.github.io/uni-life-simulator/"
                target="_blank"
              >
                Uni Life Simulator game
              </InnerLink>
              : How long can you survive university life? <br />{" "}
              <InnerLink
                href="https://github.com/judithlk/uni-life-simulator"
                target="_blank"
              >
                Github Repo
              </InnerLink>
            </p>
            <div>
              <Label title="ReactJS" />
            </div>
          </li>

          <li>
            <p>
              <InnerLink href="https://mars-spotter.vercel.app" target="_blank">
                MARS Spotter
              </InnerLink>
              : View photos from NASA&apos;s Mars rovers <br />{" "}
              <InnerLink href="https://github.com/mars-spotter" target="_blank">
                Github Repo
              </InnerLink>
            </p>
            <div>
              <Label title="NextJS" />
              <Label title="Tailwind CSS" />
              <Label title="TypeScript" />
            </div>
          </li>
        </ul>
      </section>
      <section className="space-y-5">
        <SectionHeading title="Hire Me" />
        <p>
          I am currently looking to join a team/company of progressive, talented
          individuals to apply my knowledge and skills in collaborative
          projects. I am also open to freelance jobs. Just send me an{" "}
          <InnerLink href="mailto:judithyusuf00@gmail.com" target="_blank">
            email
          </InnerLink>
          .
        </p>
        <p>
          Also, you can check out my{" "}
          <InnerLink href="https://github.com/judithlk/" target="_blank">
            Github
          </InnerLink>{" "}
          to see what else I&apos;m up to.
        </p>
      </section>
    </Wrapper>
  );
}

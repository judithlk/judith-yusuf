import Wrapper from "../components/Wrapper";
import SectionHeading from "../components/SectionHeading";
import Link from "next/link";
import InnerLink from "../components/InnerLink";

import { Inter, Lato, Lumanosimo } from "next/font/google";

export default function About() {
  return (
    <Wrapper>
      <div className="md:flex">
        <div className="">
          <header className="mb-10 group">
            <h1 className="mb-1 font-mono font-semibold text-4xl text-black dark:text-subhead-dark  md:text-6xl">
            ABOUT ME <br className="block" />
            <span className="text-base md:text-2xl font-semibold dark:text-sun-yellow">you can call me Judith </span>
            
              <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform text-base md:text-2xl font-semibold text-black dark:text-sun-yellow">
                or Jude or Judy😌
              </span>
              <span className="box-border inline-block w-1 h-6 ml-2 -mb-2 bg-gray-700 dark:bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
            </h1>
            
          </header>
        </div>
      </div>
      <section className="space-y-5">
        <SectionHeading title="I am..." />
        <p>22-year-old female human. Current location: Jos, Nigeria.</p>
        <p>
          When I&apos;m not coding, I am busy taking photos or writing, among other
          things. I would say I wear many hats, but I prefer to let my locs
          breathe. If you walk past{" "}
          <InnerLink
            href="/judithsface.jpeg"
            target="_blank"
          >
            this person
          </InnerLink>{" "}
          on the street, there&apos;s a 93.6% chance it&apos;s me.
        </p>
        <p>
          When my metaphorical hats are off, I looove to kick back and relax
          with a good fantasy book and pretend that this world is not real, or
          watch Real Madrid kick butt, or sleep because - you know - adulting is
          hard.
        </p>
        <p>
          As a friendly shy person, I am <i>somewhere</i> on the
          Introvert-Extrovert scale. Family is super important to me, and not
          just the blood type. Alone is good - great actually - but I generally
          enjoy working (and playing) with other humans.
        </p>
        <p>
          I am currently pursuing a degree in Computer Engineering at the
          University of Ilorin.
        </p>
      </section>
      
      <section className="space-y-5">
        <SectionHeading title="Coding" />
        <p>
        My interest in coding started in September 2018, about 6 years ago. <i>Woah</i>. That actually sounds like a lot when you say it out loud (please read with your head voice).
        </p>
        <p>
        I took a course on basic Front and Back End Development then, but I didn&apos;t really start my journey in the space until late 2022, so I&apos;ve only been a Web Dev for 3/2 years. My &quot;interest&quot; sparked into a passion for solving problems and creating <Link href="projects.html">cool stuff</Link> with code.
        </p>
        <p>
        I&apos;ve had a great learning journey and picked up more knowledge and skills in a number of technologies and frameworks. I try to be impartial but <InnerLink href={""} target="">ReactJS</InnerLink> has my heart.
        </p>
      </section>
      
      <section className="space-y-5">
        <SectionHeading title="Would you like to get in touch?" />
        <p>If my chatter has somehow intrigued you and you fancy an interaction, I have a <InnerLink href="https://twitter.com/judithiscoding" target="_blank">Twitter</InnerLink> account. I almost never check my dms (I almost never get any dms tbh), so if it&apos;s more pressing (like a project collaboration or job offer) you can send me an <InnerLink href="mailto:judithyusuf00@gmail.com" target="_blank">email</InnerLink>. Yes, I refresh my email every few hours waiting for good news, don&apos;t judge me.</p>
        <p>
        I think I&apos;ve overshared enough. Thanks for stopping by. x
        </p>
      </section>
    </Wrapper>
  );
}

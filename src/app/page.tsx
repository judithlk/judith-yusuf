"use client"

import SectionHeading from "./components/SectionHeading";
import Wrapper from "./components/Wrapper";
import InnerLink from "./components/InnerLink";
import Tool from "./components/Tool";

import Image from "next/image";

import { Inter, Lato, Lumanosimo } from "next/font/google";


export default function Home() {

  return (
    <Wrapper>
      <div className="">
        <div className="">
          <header className="mb-10 group">
            <h1 className="mb-1 font-mono text-4xl text-subhead-dark font-semibold md:text-6xl">
              <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
                JUDITH YUSUF
              </span>
              <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-gray-700 dark:bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
            </h1>
            <div className="text-xl font-semibold md:text-3xl">
              frontend web developer 😏
            </div>
          </header>
        </div>
        <div className="relative">
          <Image src={"/na na na.gif"} alt="" width={100} height={100} className="w-[100%] dark:hidden" />
          <Image src={"/na na na dark.gif"} alt="" width={100} height={100} className="w-[100%] hidden dark:block" />
        </div>
      </div>
      <section className="space-y-5">
        <SectionHeading title="Hello" />
        <p>
          I&apos;m a passionate web developer with a creative edge, constantly
          fueled by the desire to learn and grow in the ever-evolving digital
          world. I enjoy creating stuff and solving problems with my knowledge,
          while building meaningful experience.
        </p>
        <p>
          Read more{" "}
          <InnerLink href={"/about"} target="_self">
            about me
          </InnerLink>{" "}
          or check out my{" "}
          <InnerLink href={"/projects"} target="_self">
            projects.
          </InnerLink>
        </p>
      </section>

      <section className="space-y-5">
        <SectionHeading title="My Tools" />
        <div className="flex flex-wrap justify-between">
          <Tool>HTML</Tool>
          <Tool>JavaScript</Tool>
          <Tool>CSS</Tool>
          <Tool>Bootstrap</Tool>
          <Tool>Tailwind CSS</Tool>
          <Tool>Sass</Tool>
          <Tool>ReactJS</Tool>
          <Tool>NextJS</Tool>
          <Tool>TypeScript</Tool>
          <Tool>jQuery</Tool>
          <Tool>PHP</Tool>
          <Tool>MySQL</Tool>
          <Tool>Firebase</Tool>
          <Tool>Ajax</Tool>
          <Tool>Git</Tool>
          <Tool>Github</Tool>
        </div>
      </section>

      <section className="space-y-5">
        <SectionHeading title="Hire Me" />
        <p>
          I would love to put my creativity and experience, coupled with driving
          curiosity and a desire to learn, to work with a team of like-minded
          individuals to take your company&apos;s internet presence to the next
          level. Send an{" "}
          <InnerLink href="mailto:judithyusuf00@gmail.com" target="_blank">
            email
          </InnerLink>{" "}
          if you are interested in hiring me.
        </p>
      </section>

      <section className="space-y-5">
        <SectionHeading title="Contact Me" />
        <p>
          To get in touch, you can send me an{" "}
          <InnerLink href="mailto:judithyusuf00@gmail.com" target="_blank">
            email
          </InnerLink>{" "}
          or reach out on{" "}
          <InnerLink
            href="https://www.linkedin.com/in/judith-yusuf-21u14n/"
            target="_blank"
          >
            LinkedIn
          </InnerLink>
          . I would love to hear from you.
        </p>
      </section>

      <section className="space-y-5">
        <p className="text-sm">
          This site was built with NextJS, Tailwind CSS and TypeScript
        </p>
        {/* <p>The cool typing animation was made with <InnerLink href="http://www.mattboldt.com/" target="_blank">Typed.js</InnerLink> plugin</p> */}
      </section>
    </Wrapper>
  );
}

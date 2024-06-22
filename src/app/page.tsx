import SectionHeading from "./components/SectionHeading";
import Wrapper from "./components/Wrapper";
import InnerLink from "./components/InnerLink";
import Tool from "./components/Tool";

export default function Home() {
  return (
    <Wrapper>
      <section className="space-y-5">
        <SectionHeading title="Hello" />
        <p>
        I'm a passionate web developer with a creative edge, constantly fueled by the desire to learn and grow in the ever-evolving digital world.
        I enjoy creating stuff and solving problems with my knowledge, while building meaningful experience.
        </p>
        <p>
        Read more <InnerLink href={"/about"}>about me</InnerLink> or check out my <InnerLink href={"/projects"}>projects.</InnerLink>
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
        I would love to put my creativity and experience, coupled with driving curiosity and a desire to learn, to work with a team of like-minded individuals to take your company's internet presence to the next level. Send an <InnerLink href="mailto:judithyusuf00@gmail.com">email</InnerLink> if you are interested in hiring me.
        </p>
      </section>

      <section className="space-y-5">
        <SectionHeading title="Contact Me" />
        <p>
        To get in touch, you can send me an <InnerLink href="mailto:judithyusuf00@gmail.com">email</InnerLink> or reach out on <InnerLink href="https://www.linkedin.com/in/judith-yusuf-21u14n/">LinkedIn</InnerLink>. I would love to hear from you.
        </p>
      </section>

      <section className="space-y-5">
      <p>This site was built with NextJS, Tailwind CSS and TypeScript</p>
      <p>The cool typing animation was made with <InnerLink href="http://www.mattboldt.com/">Typed.js</InnerLink> plugin</p>
      </section>
    </Wrapper>
  );
}

import React from "react";
import "./About.css";

// Components
import Button from "../Button/Button";
import IntroHero from "../IntroHero/IntroHero";
import { Motion, MotionText } from "../Motions";

const About = () => {
  return (
    <div id="about" className="about_sect">
      <IntroHero title={"About"} />
      <div className="about_uses">
        <div className="about_description">
          <Motion>
            <p>
              Hey! I'm Success, if you haven't already gathered that by now. I'm
              a Frontend Development Software Engineer from Nigeria. I
              specialize in the Frontend, primarily HTML, CSS, Styled-Component,
              Javascript, TypeScript, React and NextJs etc, but love building
              with whatever tools are right for the job.
            </p>
          </Motion>
          <Motion>
            <p>
              Outside of work, I still love to play Football. Learn new things
              and work on personal projects.
            </p>
          </Motion>
          <Motion>
            <p>
              I'm currently looking for new positions where I can contribute to
              their team success and grow and develop my own skills. If you
              think you've got an opening that I might like, Pleases let's
              connect
            </p>
          </Motion>
          <MotionText>
            <a href="mailto:miesineagent@gmail.com">
              <Button title={"Connect"} />
            </a>
          </MotionText>
        </div>
        <div className="about_skills">
          <MotionText>
            <h2>Skills</h2>
          </MotionText>
          <MotionText>
            <div className="about_skills_list">
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>TypeScript</p>
              <p>React</p>
              <p>React Native</p>
              <p>Tailwind</p>
              <p>Rest APIS</p>
              <p>Figma</p>
              <p>Git</p>
              <p>Github</p>
              <p>Styled-component</p>
              <p>NextJs</p>
            </div>
          </MotionText>
        </div>
      </div>
    </div>
  );
};

export default About;

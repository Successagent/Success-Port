import React from "react";
import "./Home.css";

// Components
import {
  About,
  Button,
  Contact,
  Experience,
  GridDots,
  Header,
  Nav,
  Projects,
} from "../../Components";
import { Motion } from "../../Components/Motions";

const Home = ({ toggleVisible }) => {
  return (
    <div className="home_sect">
      <div className="home_header">
        <Nav />
        <div className="main">
          <Header />
          <div className="home_sect_two">
            <div className="home_sect_two_text_container">
              <Motion>
                <h1>
                  Hey, I'm Success<span>.</span>
                </h1>
              </Motion>
              <Motion>
                <h2>
                  I'm a <span>Frontend</span> <span>Developer</span>
                </h2>
              </Motion>
              <Motion>
                <p>
                  Am a passionate frontend engineer with 2+ years of experience
                  working with Html, Css, Javascript, TypeScript, React,
                  Material-UI, Styled-Component and Nextjs. Over my 2+ years of
                  experience, I have built up a diverse range of skills and
                  qualities, which are good fit for a frontend engineer. I
                  thrive on the challenges of responsive web designs, making
                  sure every project I came across delivers smooth and engaging
                  user experience. I have keen eye for creating visually
                  appealing and user-friendly digital experience. Also I take in
                  transforming design mockups into clean and efficient codes.
                </p>
              </Motion>
              <Motion>
                <a href="mailto:miesineagent@gmail.com">
                  <Button title={"Contact me"} />
                </a>
              </Motion>
            </div>
            <GridDots />
          </div>
          <About />
          <Experience />
          <Projects toggleVisible={toggleVisible} />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;

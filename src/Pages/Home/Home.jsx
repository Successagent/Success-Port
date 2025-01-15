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
                  An enthusiastic and meticulous Frontend Developer with over 3
                  years of experience building responsive and intuitive web
                  interfaces. Highly skilled in modern web technologies such as
                  HTML, CSS, JavaScript, and frameworks like React and Nextjs.
                  Proficient in converting intricate design concepts into
                  dynamic, interactive user experiences while maintaining
                  cross-browser compatibility and top-notch performance.
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

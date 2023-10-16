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
                  I've spent the last 2 years building and scaling software for
                  some pretty cool companies.I thrive on the challenges of
                  responsive web design, ensuring that every project I tackle
                  delivers a smooth and engaging user experience across diverse
                  devices.
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

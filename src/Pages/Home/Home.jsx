import React from "react";
import "./Home.css";

// Components
import {
  About,
  Button,
  Experience,
  GridDots,
  Header,
  Nav,
  Projects,
} from "../../Components";

const Home = ({ toggleVisible }) => {
  return (
    <div className="home_sect">
      <div className="home_header">
        <Nav />
        <div className="main">
          <Header />
          <div className="home_sect_two">
            <div className="home_sect_two_text_container">
              <h1>
                Hey, I'm Success<span>.</span>
              </h1>
              <h2>
                I'm a <span>Frontend</span> <span>Developer</span>
              </h2>
              <p>
                I've spent the last 2 years building and scaling software for
                some pretty cool companies.I thrive on the challenges of
                responsive web design, ensuring that every project I tackle
                delivers a smooth and engaging user experience across diverse
                devices.
              </p>
              <a href="mailto:miesineagent@gmail.com">
                <Button title={"Contact me"} />
              </a>
            </div>
            <GridDots />
          </div>
          <About />
          <Experience />
          <Projects toggleVisible={toggleVisible} />
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import "./Projects.css";

// Components
import { IntroHero } from "../../Components";

// Images
import project1 from "../../assets/Loruki.jpg";
import project2 from "../../assets/Bella Clonge.jpg";

// Icons
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import { Motion, MotionText } from "../Motions";

const Projects = ({ toggleVisible }) => {
  return (
    <section className="projects_sect">
      <IntroHero title={"Projects"} />
      <div className="project_container">
        <div>
          <Motion>
            <div className="project_image_sect">
              <img className="project_image" src={project1} alt="dev success" />
            </div>
          </Motion>
          <div className="project_link_sect">
            <MotionText>
              <h3>Loruki</h3>
            </MotionText>
            <div className="project_link_hr"></div>
            <div className="project_links_icon_sect">
              <AiFillGithub size={28} />
              <AiOutlineLink size={28} />
            </div>
          </div>
          <p>
            <span>HTML</span>
            <span>-</span>
            <span>CSS</span>
            <span>-</span>
            <span>JavaScript</span>
            <span>-</span>
            <span>React</span>
          </p>
          <Motion>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              ullam nemo error quibusdam veniam cum quia sapiente odit porro ea?
              <span> </span>
              <span
                onClick={toggleVisible}
                style={{ cursor: "pointer", textDecoration: "underline" }}
              >
                learn more
              </span>
            </p>
          </Motion>
        </div>
        <div>
          <Motion>
            <div className="project_image_sect">
              <img className="project_image" src={project2} alt="dev success" />
            </div>
          </Motion>
          <div className="project_link_sect">
            <MotionText>
              <h3>Loruki</h3>
            </MotionText>
            <div className="project_link_hr"></div>
            <div className="project_links_icon_sect">
              <AiFillGithub size={28} />
              <AiOutlineLink size={28} />
            </div>
          </div>
          <Motion>
            <p>
              <span>HTML</span>
              <span>-</span>
              <span>CSS</span>
              <span>-</span>
              <span>JavaScript</span>
              <span>-</span>
              <span>React</span>
            </p>
          </Motion>
          <Motion>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              ullam nemo error quibusdam veniam cum quia sapiente odit porro ea?
              <span> </span>
              <span
                onClick={toggleVisible}
                style={{ cursor: "pointer", textDecoration: "underline" }}
              >
                learn more
              </span>
            </p>
          </Motion>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from "react";
import "./Projects.css";

// Components
import { IntroHero } from "../../Components";

// Icons
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import { Motion, MotionText } from "../Motions";
import { projects } from "../../utils/projects";

const Projects = ({ toggleVisible }) => {
  return (
    <section id="projects" className="projects_sect">
      <IntroHero title={"Projects"} />
      <div className="project_container">
        {projects.map((project, index) => {
          const { image, briefs, skills, name, repo, live } = project;
          return (
            <div key={index}>
              <Motion>
                <div className="project_image_sect">
                  <img
                    className="project_image"
                    src={image}
                    alt="dev success"
                  />
                </div>
              </Motion>
              <div className="project_link_sect">
                <MotionText>
                  <h3>
                    {name === "AstroArch-Engineering"
                      ? name.slice(0, 9)
                      : name === "Orbital Fashion World"
                      ? name.slice(0, 7)
                      : name === "Noseason Real Estate"
                      ? name.slice(0, 8)
                      : name}
                  </h3>
                </MotionText>
                <div className="project_link_hr"></div>
                <div className="project_links_icon_sect">
                  <a target="_blank" href={repo}>
                    <AiFillGithub size={28} />
                  </a>
                  <a target="_blank" href={live}>
                    <AiOutlineLink size={28} />
                  </a>
                </div>
              </div>
              <p>
                <span>{skills[0]}</span>
                <span>-</span>
                <span>{skills[1]}</span>
                <span>-</span>
                <span>{skills[2]}</span>
                <span>-</span>
                <span>{skills[3]}</span>
                {skills.length > 4 && <span>-</span>}
                <span>{skills[4]}</span>
                {skills.length > 5 && <span>-</span>}
                <span>{skills[5]}</span>
                {skills.length > 6 && <span>-</span>}
                <span>{skills[6]}</span>
                {skills.length > 7 && <span>-</span>}
                <span>{skills[7]}</span>
                {skills.length > 8 && <span>-</span>}
                <span>{skills[8]}</span>
                {skills.length > 9 && <span>-</span>}
                <span>{skills[9]}</span>
              </p>
              <Motion>
                <p>
                  {briefs[0]}?<span> </span>
                  <span
                    onClick={() => toggleVisible(project)}
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    learn more
                  </span>
                </p>
              </Motion>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

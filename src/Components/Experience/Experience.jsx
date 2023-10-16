import React from "react";
import "./Experience.css";

// Components
import IntroHero from "../IntroHero/IntroHero";
import { companies } from "../../utils/experience";
import { Motion } from "../Motions";

const Experience = () => {
  return (
    <section className="experience_sect">
      <IntroHero title={"Experience"} />
      <div className="experience_container">
        {companies.map((company, index) => {
          const { name, started, presenet, role, country, bio, skills } =
            company;
          return (
            <div className="company_items" key={index}>
              <div className="company_header">
                <Motion>
                  <h3>{name}</h3>
                </Motion>
                <Motion>
                  <p>
                    {started} - {presenet}
                  </p>
                </Motion>
              </div>
              <div className="company_header">
                <Motion>
                  <h3>
                    <span>{role}</span>
                  </h3>
                </Motion>
                <Motion>
                  <p>{country}</p>
                </Motion>
              </div>
              <Motion>
                <p>{bio}</p>
              </Motion>
              <div className="company_skill_sect">
                {skills.map((skill, index) => {
                  return (
                    <Motion key={index}>
                      <p>{skill}</p>
                    </Motion>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;

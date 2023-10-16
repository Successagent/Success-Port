import React from "react";
import "./Experience.css";

// Components
import IntroHero from "../IntroHero/IntroHero";
import { companies } from "../../utils/experience";

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
                <h3>{name}</h3>
                <p>
                  {started} - {presenet}
                </p>
              </div>
              <div className="company_header">
                <h3>
                  <span>{role}</span>
                </h3>
                <p>{country}</p>
              </div>
              <p>{bio}</p>
              <div className="company_skill_sect">
                {skills.map((skill, index) => {
                  return <p key={index}>{skill}</p>;
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

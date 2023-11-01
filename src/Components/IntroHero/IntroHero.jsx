import React from "react";
import { MotionText } from "../Motions";

const IntroHero = ({ title }) => {
  return (
    <div className="about_hero_sect">
      <MotionText>
        <h2 className="about_text">
          {title}
          <span>.</span>
        </h2>
      </MotionText>
      <div className="project_link_hr"></div>
    </div>
  );
};

export default IntroHero;

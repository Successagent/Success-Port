import React from "react";

const IntroHero = ({ title }) => {
  return (
    <div className="about_hero_sect">
      <h2 className="about_text">
        {title}
        <span>.</span>
      </h2>
      <div></div>
    </div>
  );
};

export default IntroHero;

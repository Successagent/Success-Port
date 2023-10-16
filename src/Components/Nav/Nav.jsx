import React from "react";
import "./Nav.css";

// Images
import logo from "../../assets/success.png";
import { MotionText } from "../Motions";

const Nav = () => {
  return (
    <nav>
      <img src={logo} alt="my logo" />
      <div className="navigation_sect">
        <MotionText>
          <p>About</p>
        </MotionText>
        <MotionText>
          <p>Project</p>
        </MotionText>
        <MotionText>
          <p>Exp.</p>
        </MotionText>
        <MotionText>
          <p>Contact</p>
        </MotionText>
      </div>
    </nav>
  );
};

export default Nav;

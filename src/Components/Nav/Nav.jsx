import React from "react";
import "./Nav.css";
import { HashLink as Link } from "react-router-hash-link";

// Images
import logo from "../../assets/success.png";
import { MotionText } from "../Motions";

const Nav = () => {
  return (
    <nav>
      <Link smooth to={"#header"}>
        <img src={logo} alt="my logo" />
      </Link>
      <div className="navigation_sect">
        <MotionText>
          <Link smooth to={"#about"}>
            <p>About</p>
          </Link>
        </MotionText>
        <MotionText>
          <Link smooth to={"#projects"}>
            <p>Project</p>
          </Link>
        </MotionText>
        <MotionText>
          <Link smooth to={"#experience"}>
            <p>Exp.</p>
          </Link>
        </MotionText>
        <MotionText>
          <Link smooth to={"#contact"}>
            <p>Contact</p>
          </Link>
        </MotionText>
      </div>
    </nav>
  );
};

export default Nav;

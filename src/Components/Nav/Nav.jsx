import React from "react";
import "./Nav.css";

// Images
import logo from "../../assets/success.png";

const Nav = () => {
  return (
    <nav>
      <img src={logo} alt="my logo" />
      <div className="navigation_sect">
        <p>About</p>
        <p>Project</p>
        <p>Exp.</p>
        <p>Contact</p>
      </div>
    </nav>
  );
};

export default Nav;

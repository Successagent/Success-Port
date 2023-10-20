import React from "react";
import "./Header.css";

// Icons
import { BsLinkedin } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiOutlineLink,
  AiOutlineMenu,
} from "react-icons/ai";

// Components
import Button from "../Button/Button";
import { MotionText } from "../Motions";

const Header = () => {
  return (
    <header id="header">
      <div className="header_icons_sect">
        <a
          href="https://www.linkedin.com/in/success-agent-58a436235/"
          target="_blank"
        >
          <BsLinkedin size={25} />
        </a>
        <a href="https://github.com/Successagent" target="_blank">
          <AiFillGithub size={25} />
        </a>
        <a href="">
          <AiFillTwitterCircle size={25} />
        </a>
      </div>
      <MotionText>
        <a href="">
          <Button
            title={"My Resume"}
            icon={<AiOutlineLink color="#0aff9d" size={17} />}
          />
        </a>
      </MotionText>
      <AiOutlineMenu className="header_menu" color="#0aff9d" size={20} />
    </header>
  );
};

export default Header;

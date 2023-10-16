import React from "react";
import "./Header.css";

// Icons
import { BsLinkedin } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiOutlineLink,
} from "react-icons/ai";

// Components
import Button from "../Button/Button";
import { Motion, MotionText } from "../Motions";

const Header = () => {
  return (
    <header>
      <div className="header_icons_sect">
        <a href="">
          <BsLinkedin size={25} />
        </a>
        <a href="">
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
    </header>
  );
};

export default Header;

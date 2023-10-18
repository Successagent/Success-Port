import React from "react";
import "./Modal.css";

// Icons
import {
  AiFillGithub,
  AiOutlineClose,
  AiOutlineLinkedin,
  AiOutlineLink,
} from "react-icons/ai";

const Modal = ({ toggleVisible, project }) => {
  const { image, briefs, name, skills, repo, link, live } = project;

  return (
    <div className="read_more_modal">
      <div className="modal_header">
        <h3></h3>
        <AiOutlineClose color="#fff" size={20} onClick={toggleVisible} />
      </div>
      <div className="modal_body">
        <img src={image} alt="" />
        <div>
          <h2>{name}</h2>
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
          <p>{briefs[0]}</p>
          <p>{briefs[1]}</p>
          <h3>Project Links</h3>
          <div className="project_links_icon_sect">
            <a target="_blank" href={repo}>
              <AiFillGithub size={28} />
            </a>
            <a target="_blank" href={link}>
              <AiOutlineLinkedin size={28} />
            </a>
            <a target="_blank" href={live}>
              <AiOutlineLink size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

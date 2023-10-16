import React from "react";
import "./Modal.css";

// Icons
import {
  AiFillGithub,
  AiOutlineClose,
  AiOutlineLinkedin,
} from "react-icons/ai";

// Images
import project1 from "../../assets/Loruki.jpg";

const Modal = ({ toggleVisible }) => {
  return (
    <div className="read_more_modal">
      <div className="modal_header">
        <h3></h3>
        <AiOutlineClose color="#fff" size={20} onClick={toggleVisible} />
      </div>
      <div className="modal_body">
        <img src={project1} alt="" />
        <div>
          <h2>Loruki</h2>
          <p>
            <span>HTML</span>
            <span>-</span>
            <span>CSS</span>
            <span>-</span>
            <span>JavaScript</span>
            <span>-</span>
            <span>React</span>
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
            aliquid, consequuntur laudantium necessitatibus eaque beatae saepe
            cupiditate officia doloremque quia.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
            aliquid, consequuntur laudantium necessitatibus eaque beatae saepe
            cupiditate officia doloremque quia.
          </p>
          <h3>Project Links</h3>
          <div className="project_links_icon_sect">
            <AiFillGithub size={28} />
            <AiOutlineLinkedin size={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

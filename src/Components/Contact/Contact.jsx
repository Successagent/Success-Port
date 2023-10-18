import React from "react";
import "./Contact.css";

// Icons
import { AiOutlineMail } from "react-icons/ai";
import { Motion, MotionText } from "../Motions";

const Contact = () => {
  return (
    <section id="contact" className="contact_sect">
      <Motion>
        <h1>
          Contact<span>.</span>
        </h1>
      </Motion>
      <MotionText>
        <p>
          Shoot me an email if you want to connect! You can also find me on
          Linkedin if that's more your speed.
        </p>
      </MotionText>
      <MotionText>
        <div className="email_sect">
          <AiOutlineMail size={24} />
          <p>Miesineagent@gmail.com</p>
        </div>
      </MotionText>
    </section>
  );
};

export default Contact;

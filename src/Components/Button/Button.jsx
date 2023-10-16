import React from "react";
import "./Button.css";

const Button = ({ icon, title }) => {
  return (
    <>
      <button className="btn">
        {title} {icon}
      </button>
    </>
  );
};

export default Button;

import React from "react";

const AboutMe = ({ title, text }) => {
  return (
    <div className="container-am">
    <div className="card-am">
      <h2 className="card-title-am">{title}</h2>
      <p className="card-text-am">{text}</p>
    </div>
    </div>
  );
};

export default AboutMe;

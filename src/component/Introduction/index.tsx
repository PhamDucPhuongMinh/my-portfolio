import React from "react";
import "./index.scss";

const Introduction: React.FC = () => {
  return (
    <div id="home" className="introduction">
      <div className="introduction__content">
        <h2 className="introduction__content__heading">HEY, I'M PHUONG MINH</h2>
        <p className="introduction__content__info">
          The happiness of a Frontend Developer is to build Websites or Web
          Applications that gives users a great experience.
        </p>
        <a
          href="#projects"
          className="introduction__content__btn btn-primary btn-lg"
        >
          Projects
        </a>
        <div className="introduction__content__mouse"></div>
      </div>
    </div>
  );
};

export default Introduction;

import React from "react";
import "./index.scss";

const About: React.FC = () => {
  const arrSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "SASS",
    "Ant Design",
    "Bootstrap",
    "Responsive Design",
    "GIT",
    "SQL Basics",
  ];
  return (
    <div id="about" className="about">
      <div className="my-container">
        <div className="about__heading">
          <h3 className="text-uppercase text-center pb-5">About me</h3>
          <p className="text-center mt-4">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div className="about__content">
          <div className="about__content__main">
            <h5 className="mb-5 fw-bold">Get to know me!</h5>
            <p>
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications. Check out some of my work in the Projects
              section.
            </p>
            <p>
              I graduated from University of Information Technology - Ho Chi
              Minh City National University in 2023. I am learning and
              cultivating more knowledge every day to develop my career and my
              quality of life and family.
            </p>
            <p>
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>
            <a href="#contact" className="about__content__button btn-primary">
              Contact
            </a>
          </div>
          <div className="about__content__skills">
            <h5 className="mb-4 fw-bold mb-5">My Skills</h5>
            <div className="about__skills__list d-flex flex-wrap">
              {arrSkills.map((item: string, index: number) => {
                return (
                  <div key={index} className="about__skills__item">
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

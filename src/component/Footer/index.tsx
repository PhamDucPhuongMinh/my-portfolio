import React from "react";
import "./index.scss";
import {
  FacebookFilled,
  GithubFilled,
  LinkedinFilled,
  MailFilled,
} from "@ant-design/icons";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="my-container">
        <div className="footer__content">
          <div className="footer__content__info">
            <h2 className="text-uppercase mb-4 mb-md-5">
              Pham Duc Phuong Minh
            </h2>
            <p className="mb-0">
              The happiness of a Frontend Developer is to build Websites or Web
              Applications that gives users a great experience.
            </p>
          </div>
          <div className="footer__content__social-media">
            <h2 className="text-uppercase mb-4 mb-md-5">Social</h2>
            <ul className="p-0 d-flex">
              <li className="me-3">
                <a
                  href="https://www.facebook.com/chua.minh.3/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookFilled
                    style={{ fontSize: "2.4rem" }}
                    className="icon-media"
                  />
                </a>
              </li>
              <li className="me-3">
                <a
                  href="https://www.linkedin.com/in/minh-pham-duc-phuong-8a30b2236/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinFilled
                    style={{ fontSize: "2.4rem" }}
                    className="icon-media"
                  />
                </a>
              </li>
              <li className="me-3">
                <a
                  href="mailto:phamducphuongminh0103@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MailFilled
                    style={{ fontSize: "2.4rem" }}
                    className="icon-media"
                  />
                </a>
              </li>
              <li className="me-3">
                <a
                  href="https://github.com/PhamDucPhuongMinh"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubFilled
                    style={{ fontSize: "2.4rem" }}
                    className="icon-media"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__copyright">
          <p className="mb-0">
            © Copyright 2023. Made by{" "}
            <span className="text-decoration-underline">
              Pham Duc Phuong Minh
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

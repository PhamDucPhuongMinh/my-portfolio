import React, { useRef } from "react";
import "./index.scss";

const Navigation: React.FC = () => {
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  const handleToggleMenu = () => {
    if (toggleRef.current && menuRef.current) {
      const toggleEle: HTMLElement = toggleRef.current;
      const menuEle: HTMLElement = menuRef.current;
      toggleEle.classList.toggle("navigation__toggle-menu--open");
      menuEle.classList.toggle("navigation__menu--open");
    }
  };

  const handleNavItemClick = () => {
    if (window.innerWidth < 768) {
      handleToggleMenu();
    }
  };

  return (
    <nav className="navigation">
      <div className="container-fluid d-flex align-items-center justify-content-between h-100 px-5">
        <div className="navigation__logo d-flex align-items-center text-hover-primary">
          <div className="navigation__logo__avatar rounded-circle bg-primary overflow-hidden">
            <img src="./assets/images/avatar.png" alt="" />
          </div>
          <h4 className="mb-0 ms-3 text-uppercase">Pham Duc Phuong Minh</h4>
        </div>
        <div ref={menuRef} className="navigation__menu h-100 d-flex">
          <ul className="navigation__menu__list mb-0 ps-0 d-flex w-100">
            <li
              className="navigation__menu__item px-0 px-md-4 d-flex align-items-center text-uppercase"
              onClick={handleNavItemClick}
            >
              <a href="#home" className="text-hover-primary">
                Home
              </a>
            </li>
            <li
              className="navigation__menu__item px-0 px-md-4 d-flex align-items-center text-uppercase"
              onClick={handleNavItemClick}
            >
              <a href="#about" className="text-hover-primary">
                About
              </a>
            </li>
            <li
              className="navigation__menu__item px-0 px-md-4 d-flex align-items-center text-uppercase"
              onClick={handleNavItemClick}
            >
              <a href="#projects" className="text-hover-primary">
                Projects
              </a>
            </li>
            <li
              className="navigation__menu__item px-0 px-md-4 d-flex align-items-center text-uppercase"
              onClick={handleNavItemClick}
            >
              <a href="#contact" className="text-hover-primary">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div
          ref={toggleRef}
          className="navigation__toggle-menu d-block d-md-none"
          onClick={handleToggleMenu}
        ></div>
      </div>
    </nav>
  );
};

export default Navigation;

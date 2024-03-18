import "./Navbar.css";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";

// ... (Other imports)
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar-container">
            {/* <div className="nav-branding">Navbar</div> */}
            <div
              className={`hamburger ${isOpen ? "active" : ""}`}
              onClick={toggleMenu}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
              <CustomLink to="/" exact onClick={toggleMenu}>
                Home
              </CustomLink>
              <CustomLink to="/about" onClick={toggleMenu}>
                About
              </CustomLink>
              <CustomLink to="/studies" onClick={toggleMenu}>
                Publications
              </CustomLink>
              <CustomLink to="http://selenicalab.createuky.net/" external>
                The Lab
              </CustomLink>
              <CustomLink to="/visualize" onClick={toggleMenu}>
                Visualize
              </CustomLink>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

function CustomLink({ to, children, external, exact, ...props }) {
  if (external) {
    return (
      <li className="nav-item">
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
          className="nav-link"
        >
          {children}
        </a>
      </li>
    );
  }

  return (
    <li className="nav-item">
      <NavLink to={to} exact={exact} {...props} className="nav-link">
        {children}
      </NavLink>
    </li>
  );
}

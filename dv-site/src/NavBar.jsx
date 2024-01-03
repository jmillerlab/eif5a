import "./Navbar.css";
import { NavLink, useMatch, useResolvedPath, Link } from "react-router-dom";

// ... (Other imports)

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar">
          <ul className="nav-menu">
            <CustomLink to="/" exact>
              Home
            </CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/studies">Publications</CustomLink>
            <CustomLink to="http://selenicalab.createuky.net/" external>
              The Lab
            </CustomLink>
            <CustomLink to="/visualize">Visualize</CustomLink>
          </ul>
          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
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

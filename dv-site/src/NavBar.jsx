import "./Navbar.css";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar">
          {/* <NavLink to="/about" className="nav-item">
            Selenica Lab
  </NavLink>*/}
          <ul className="nav-menu">
            <CustomLink to="/homepage">Home</CustomLink>
            <CustomLink to="/studies">Download</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/thelab">The Lab</CustomLink>
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

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active-page" : "nav-item"}>
      <NavLink to={to} {...props} className="nav-link">
        {children}
      </NavLink>
    </li>
  );
}

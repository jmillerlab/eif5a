import { useState, useEffect, useRef } from "react";
import "./customdropdown.css";
import { CSSTransition } from "react-transition-group";

export default function CustomDropDown() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  const dropdownOptions = [
    "select",
    "DHS_DOHHvsWT_EC",
    "DHS_DOHHvsTar4_EC",
    "eIF5A_DDvsDHS_DOHH",
    "eIF5A_DDvseIF5A",
    "eIF5A_DDvsK50A_DD",
    "eIF5A_DDvsTar4_EC",
    "eIF5A_DDvsWT_EC",
    "eIF5AvsTar4_EC",
    "eIF5AvsWT_EC",
    "K50A_DDvsDHS_DOHH",
    "K50A_DDvsTar4_EC",
    "K50A_DDvsWT_EC",
    "Tar4_ECvsWT_EC",
  ];

  function calcHeight(el) {
    const height = el.offsetHeight + 13;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <>
        {/* <a
          href="#"
          className="menu-item"
          onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
        >
          select
        </a> */}
        {dropdownOptions.map((option, index) => (
          <a
            href="#"
            className="menu-item"
            onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
            key={index}
          >
            {option}
          </a>
        ))}
      </>
    );
  }

  function DropdownClosed(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        select
      </a>
    );
  }

  return (
    <div className="custom-dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames=""
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownClosed goToMenu="secondary" />
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "secondary"}
        unmountOnExit
        timeout={500}
        classNames=""
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" />
        </div>
      </CSSTransition>
    </div>
  );
}

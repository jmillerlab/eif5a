// Updated ToggleSwitch component
import React from "react";
import "./togglecomponent.css";

export default function ToggleSwitch({ toggleState, onToggle }) {
  return (
    <span className="switch">
      <input
        type="checkbox"
        checked={toggleState}
        onChange={onToggle}
        id="switcher"
      />
      <label htmlFor="switcher"></label>
    </span>
  );
}

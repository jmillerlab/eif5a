// Updated ToggleSwitch component
import React from "react";
import "./ToggleGraphComponent.css";
import { motion as m } from "framer-motion";

export default function ToggleSwitch({ toggleState, onToggle }) {
  return (
    <m.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="switch"
    >
      <input
        type="checkbox"
        checked={toggleState}
        onChange={onToggle}
        id="switcher"
      />
      <label htmlFor="switcher"></label>
    </m.span>
  );
}

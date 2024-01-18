import "./expandcomponentbutton.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

export default function VisualizeInformation({ onClick, buttonText }) {
  return (
    <div className="instructions-box">
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="instructions-container"
        onClick={onClick}
      >
        <Link className="instructions-header">
          <p>{buttonText}</p>
        </Link>
      </m.div>
    </div>
  );
}

import "./vennvisbutton.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function VisualizeInformation({ onClick }) {
  return (
    <div className="instructions-box">
      <div className="instructions-container" onClick={onClick}>
        <Link className="instructions-header">
          <p>Visualize as Venn</p>
        </Link>
      </div>
    </div>
  );
}

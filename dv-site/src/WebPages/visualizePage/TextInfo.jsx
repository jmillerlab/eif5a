import "./textinfo.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function VisualizeInformation({ onClick }) {
  return (
    <div className="instructions-container" onClick={onClick}>
      <Link className="instructions-header">
        <a>Visualize DEGlist Datasets</a>
      </Link>
    </div>
  );
}

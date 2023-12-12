import "./textinfo.css";
import React, { useState } from "react";

export default function VisualizeInformation({ onClick }) {
  return (
    <div className="instructions-container" onClick={onClick}>
      <div className="instructions-header">
        <p>Visualize DEGlist Datasets</p>
      </div>
    </div>
  );
}

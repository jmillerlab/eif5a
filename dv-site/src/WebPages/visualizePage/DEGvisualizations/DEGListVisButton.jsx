// Updated VisualizeInformation component
import React from "react";
import "./deglistvisbutton.css";
import { Link } from "react-router-dom";

export default function VisualizeInformation({ onPress }) {
  return (
    <div className="instructions-box">
      <div className="instructions-container" onClick={onPress}>
        <Link className="instructions-header">
          <p>Visualize as Volcano Plot</p>
        </Link>
      </div>
    </div>
  );
}

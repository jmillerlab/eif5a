import "./vennvisbutton.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function VennVisButton({ onClick }) {
  return (
    <div className="instructions-container" onClick={onClick}>
      <Link className="instructions-header">
        <a>Visualize Data as Venn</a>
      </Link>
    </div>
  );
}

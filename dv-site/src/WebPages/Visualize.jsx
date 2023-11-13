import { color } from "d3";
import "./visualize.css";

export default function Visualize() {
  return (
    <div className="visualize-container">
      <div className="vh-container">
        <div className="visualize-header">
          <h1>Visualization of Project Data</h1>
        </div>
      </div>
      <div className="vi-container">
        <div className="visualize-instructions">
          <h1>Instructions</h1>
        </div>
      </div>
      <div className="vd-containter">
        <div className="visualize-distribution">
          <h1>Visualize</h1>
        </div>
      </div>
    </div>
  );
}

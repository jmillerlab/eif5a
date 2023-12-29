import "./about.css";
import VennDiagram from "../graphs/vennDiagrams/VennDiagram";
export default function About() {
  return (
    <div className="visualize-container">
      <div className="vh-container">
        <div className="visualize-header">
          <h1>Project Overview</h1>
        </div>
      </div>
      <VennDiagram />
    </div>
  );
}

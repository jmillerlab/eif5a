import "./about.css";
import PlotlyGraph from "../graphs/PlotlyGraph";
import HeatmapComponent from "../graphs/HeatmapComponent";
export default function About() {
  return (
    <div className="visualize-container">
      <div className="vh-container">
        <div className="visualize-header">
          <h1>Project Overview</h1>
        </div>
      </div>
      <PlotlyGraph />
    </div>
  );
}

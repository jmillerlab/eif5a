import "./plotlygraph.css";
import Heatmap from "../graphs/Heatmap";

export default function HeatmapComponent(props) {
  return (
    <div className="plot-size">
      <Heatmap />;
    </div>
  );
}

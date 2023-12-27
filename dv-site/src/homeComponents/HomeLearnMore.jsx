import "./HomeLearnMore.css";
import ExpandingButton from "./ExpandingButton";

function Plot3() {
  return (
    <div className="p3-container">
      <div className="p3-box">
        <div className="p3-large-font">Learn More</div>
        <div className="buttons-container">
          <ExpandingButton tab="Publications" />
          <ExpandingButton tab="About" />
          <ExpandingButton tab="Lab" />
          <ExpandingButton tab="Visualizations" />
        </div>
      </div>
    </div>
  );
}

export default Plot3;

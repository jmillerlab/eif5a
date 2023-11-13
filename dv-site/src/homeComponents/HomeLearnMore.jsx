import "./HomeLearnMore.css";
import ExpandingButton from "./ExpandingButton";

function Plot3() {
  return (
    <div className="p3-container">
      <div className="p3-box">
        <div className="p3-large-font">Learn More</div>
        <div className="buttons-container">
          <ExpandingButton />
          <ExpandingButton />
          <ExpandingButton />
          <ExpandingButton />
        </div>
      </div>
    </div>
  );
}

export default Plot3;

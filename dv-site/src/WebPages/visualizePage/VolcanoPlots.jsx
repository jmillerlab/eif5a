import "./volcanoplots.css";

export default function VolcanoPlots(props) {
  const iframeStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <div className="plot-size" style={{ overflow: "hidden" }}>
      <iframe
        title={props.title}
        style={iframeStyle}
        src={props.link}
        frameBorder="0"
        allowFullScreen={true}
        navContentPaneEnabled={false}
      />
    </div>
  );
}

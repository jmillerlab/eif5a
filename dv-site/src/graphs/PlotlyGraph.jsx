import "./plotlygraph.css";
import { motion as m } from "framer-motion";

export default function PlotlyGraph(props) {
  const iframeStyle = {
    width: "100%",
    height: "100%",
    minHeight: "300px",
    minWidth: "600px",
  };

  const filePath = `src/graphs/${props.file}.html`;
  const dataBeingDisplayed = props.file.replace(".all", ""); // Remove ".all" from the file name

  const lastSlashIndex = dataBeingDisplayed.lastIndexOf("/");

  // Use substring to get the portion of the string after the last "/"
  const display = dataBeingDisplayed.substring(lastSlashIndex + 1);

  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="plot-size"
      >
        <p
          style={{
            color: "black",
            textAlign: "center",
            marginTop: "20px",
            marginBottom: "10px",
          }}
        >
          {display}
        </p>
        <iframe
          style={iframeStyle}
          title="Dash App"
          // src="src\graphs\DHS_DOHHvsWT_EC.all.cancer.html"
          src={filePath}
          allowFullScreen={true}
          frameBorder="0"
          navContentPaneEnabled={false}
        />
        ;
      </m.div>
    </>
  );
}

// `src/graphs/DHS_DOHHvsWT_EC/${props.file}.html`

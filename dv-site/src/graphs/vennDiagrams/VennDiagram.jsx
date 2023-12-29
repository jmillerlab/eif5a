export default function VennDiagram(props) {
  const iframeStyle = {
    width: "100%",
    height: "100%",
    minHeight: "300px",
    minWidth: "600px",
  };

  const filePath = "srcgraphs\vennDiagrams\venn_diagram_interactive.html";

  return (
    <div className="plot-size">
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
    </div>
  );
}

// `src/graphs/DHS_DOHHvsWT_EC/${props.file}.html`

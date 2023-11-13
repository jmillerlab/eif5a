import Plot from "react-plotly.js";

function Heatmap() {
  const numRows = 15;
  const numColumns = 17;

  const dataMatrix = Array.from({ length: numRows }, () =>
    Array.from({ length: numColumns }, () => Math.random())
  );

  const xLabels = Array.from({ length: numColumns }, (_, i) => `C${i + 1}`);
  const yLabels = Array.from({ length: numRows }, (_, i) => `R${i + 1}`);

  const customColors = [
    // Define colors at specific values (0, 0.5, 1)
    [0, "lightblue"],
    [0.5, "blue"],
    [1, "purple"],
  ];

  const data = [
    {
      z: dataMatrix,
      x: xLabels,
      y: yLabels,
      type: "heatmap",
      hoverongaps: false,
      colorscale: customColors,
    },
  ];

  var config = { responsive: true };

  const layout = {
    paper_bgcolor: " rgb(240,240,240)",
    plot_bgcolor: "  rgb(240, 240, 240)",
    title: "Heatmap",

    font: {
      color: "black",
    },

    width: 700,
    height: 600,
  };

  return <Plot data={data} layout={layout} config={config} />;
}

export default Heatmap;

import Plot from "react-plotly.js";

function Histogram() {
  const numPoints = 500;
  const randomX1 = Array.from({ length: numPoints }, () => Math.random() * 5);
  const randomX2 = Array.from({ length: numPoints }, () => Math.random() * 10);
  const randomY1 = Array.from({ length: numPoints }, () => Math.random());
  const randomY2 = Array.from({ length: numPoints }, () => Math.random() * 2);

  var trace1 = {
    x: randomX1,
    y: randomY1,
    name: "control",
    autobinx: false,
    histnorm: "count",
    marker: {
      color: "rgb(106, 219, 255)",
      line: {
        color: "rgb(106, 219, 255)",
        width: 1,
      },
    },
    opacity: 0.5,
    type: "histogram",
    xbins: {
      end: 2.8,
      size: 0.06,
      start: 0.5,
    },
  };

  var trace2 = {
    x: randomX2,
    y: randomY2,
    autobinx: false,
    marker: {
      color: "rgb(79, 107, 255)",
      line: {
        color: "rgb(79, 107, 255)",
        width: 1,
      },
    },
    name: "experimental",
    opacity: 0.85,
    type: "histogram",
    xbins: {
      end: 4,
      size: 0.06,
      start: -3.2,
    },
  };

  const data = [trace1, trace2];
  var config = { responsive: true };
  const layout = {
    bargap: 0.05,
    bargroupgap: 0.2,
    barmode: "overlay",
    paper_bgcolor: " rgb(240, 240, 240)",
    plot_bgcolor: "  rgb(240, 240, 240)",
    autosize: true,
    font: {
      color: "black",
    },

    title: "Histogram",
    xaxis: {
      title: "Value",
    },
    yaxis: { title: "Count", gridcolor: "gray", gridwidth: 0.5 },
  };

  window.dispatchEvent(new Event("resize"));

  return <Plot data={data} layout={layout} config={config} />;
}

export default Histogram;

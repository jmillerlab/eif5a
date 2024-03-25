import React, { useEffect, useRef } from "react";
import Plotly from "plotly.js-dist-min";
import DHS_DOHHvsTar4_EC_KEGG from "./DHS_DOHHvsTar4_EC/enrichment.KEGG.json";
import DHS_DOHHvsTar4_EC_RCTM from "./DHS_DOHHvsTar4_EC/enrichment.RCTM.json";
import "./PlotlyJS.css";

const PlotlyBarChart = ({ numTerms }) => {
  const plotContainerRef = useRef(null);

  useEffect(() => {
    const createBarChart = (data) => {
      data.sort(
        (a, b) =>
          parseFloat(b["enrichment score"]) - parseFloat(a["enrichment score"])
      );
      const topTerms = data.slice(0, numTerms);
      const termDescriptions = topTerms.map((item) => item["term description"]);

      const shortDescriptions = topTerms.map((item) =>
        shortenDescription(item["term description"])
      );

      const enrichmentScores = topTerms.map((item) =>
        parseFloat(item["enrichment score"])
      );

      const trace = {
        y: enrichmentScores,
        x: shortDescriptions,
        // text: termDescriptions,
        hovertemplate: termDescriptions,
        name: "",
        type: "bar",
        orientation: "v",
        marker: {
          color: "skyblue",
          opacity: 0.75,
        },
      };

      const layout = {
        title: `Top ${numTerms} Regulations`,
        autosize: true,
        margin: {
          t: 25, // Top margin
          l: 80, // Adjust for term descriptions
          b: 300, // Bottom margin
          r: 125, // Right margin
        },
        plot_bgcolor: "white",
        xaxis: {
          //   title: "Enrichment Score",
          showgrid: true,
          gridwidth: 1,
          gridcolor: "lightgrey",
          griddash: "dot",
          ticks: "outside",
          tickwidth: 2,
          tickcolor: "black",
        },
        yaxis: {
          //   title: "Term Description",
          //   autorange: "reversed",
          showgrid: true,
          gridwidth: 1,
          gridcolor: "lightgrey",
          griddash: "dot",
          ticks: "outside",
          tickwidth: 2,
          tickcolor: "black",
        },
      };

      const config = {
        displayModeBar: false, // This disables the modebar
      };

      Plotly.newPlot(plotContainerRef.current, [trace], layout, config, {
        responsive: true,
      });
    };

    // createBarChart(DHS_DOHHvsTar4_EC_KEGG);
    createBarChart(DHS_DOHHvsTar4_EC_RCTM);

    // Setup ResizeObserver to ensure the plot is responsive
    const resizeObserver = new ResizeObserver(() => {
      Plotly.relayout(plotContainerRef.current, {
        autosize: true,
      });
    });

    if (plotContainerRef.current) {
      resizeObserver.observe(plotContainerRef.current);
    }

    // Cleanup on component unmount
    return () => {
      if (plotContainerRef.current) {
        resizeObserver.unobserve(plotContainerRef.current);
      }
    };
  }, [numTerms]); // Empty dependency array means this effect runs once on mount

  const shortenDescription = (description) => {
    const maxLength = 30; // Maximum length for description
    if (description.length > maxLength) {
      return description.substring(0, maxLength - 3) + "...";
    } else {
      return description;
    }
  };

  return (
    <div
      ref={plotContainerRef}
      style={{
        width: "100%",
        maxWidth: 1300,
        minHeight: 1000,
        marginTop: 60,
        marginBottom: 30,
        height: "100%",
      }}
    ></div>
  );
};

export default PlotlyBarChart;

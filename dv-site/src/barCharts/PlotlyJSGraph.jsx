import React, { useEffect, useRef } from "react";
import Plotly from "plotly.js-dist-min";
import "./PlotlyJS.css";

const PlotlyBarChart = ({ numTerms, chart, handleChartClick }) => {
  const plotContainerRef = useRef(null);

  useEffect(() => {
    const createBarChart = (data) => {
      data.sort(
        (a, b) =>
          parseFloat(b["enrichment score"]) - parseFloat(a["enrichment score"])
      );
      const topTerms = data.slice(0, numTerms);

      const uniqueDescriptions = topTerms.map((item, index) => {
        const baseDescription = shortenDescription(item["term description"]);
        const uniqueDescriptor = `${baseDescription} (${item[
          "enrichment score"
        ].toFixed(2)})`;
        return uniqueDescriptor;
      });

      const enrichmentScores = topTerms.map((item) =>
        parseFloat(item["enrichment score"])
      );

      const trace = {
        y: uniqueDescriptions,
        x: enrichmentScores,
        hovertemplate: topTerms.map(
          (item) =>
            `${item["term description"]}<br>Enrichment Score: %{x}<extra></extra>`
        ),
        type: "bar",
        orientation: "h",
        marker: {
          color: "skyblue",
          opacity: 0.75,
        },
      };

      const layout = {
        title: `Top Regulations`,
        autosize: true,
        margin: {
          t: 25,
          l: 300,
          b: 300,
          r: 125,
        },
        plot_bgcolor: "white",
        xaxis: {
          showgrid: true,
          gridwidth: 1,
          gridcolor: "lightgrey",
          griddash: "dot",
          ticks: "outside",
          tickwidth: 2,
          tickcolor: "black",
        },
        yaxis: {
          autorange: "reversed",
          showgrid: true,
          gridwidth: 1,
          gridcolor: "lightgrey",
          griddash: "dot",
          ticks: "outside",
          tickwidth: 2,
          tickcolor: "black",
        },
        modebar: {
          orientation: "v",
          activecolor: "gray",
        },
      };

      const config = {
        displayModeBar: true,
      };

      Plotly.newPlot(plotContainerRef.current, [trace], layout, config, {
        responsive: true,
      });
      plotContainerRef.current.on("plotly_click", handleChartClick);
    };

    createBarChart(chart);

    const resizeObserver = new ResizeObserver(() => {
      Plotly.relayout(plotContainerRef.current, {
        autosize: true,
      });
    });

    if (plotContainerRef.current) {
      resizeObserver.observe(plotContainerRef.current);
    }

    return () => {
      if (plotContainerRef.current) {
        resizeObserver.unobserve(plotContainerRef.current);
      }
    };
  }, [numTerms, chart]);

  const shortenDescription = (description) => {
    const maxLength = 30;
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

import React, { useEffect, useRef } from "react";
import Plotly from "plotly.js-dist-min";
import "./PlotlyGraph.css";

const VolcanoPlot = ({ data, threshold, handlePlotlyClick }) => {
  // console.log("IMPORTED DATA", data);
  const plotContainerRef = useRef(null);

  useEffect(() => {
    if (data && plotContainerRef.current) {
      // const pValueThreshold = -Math.log10(threshold);
      const numberOfTests = data.length;
      const userEnteredAlpha = parseFloat(threshold);
      // Calculate the Bonferroni-corrected threshold based on the user's input
      const bonferroniCorrectedThreshold = userEnteredAlpha / numberOfTests;
      // Convert this corrected threshold to a -log10 scale for plotting
      const pValueThreshold = -Math.log10(bonferroniCorrectedThreshold);

      const processedData = data.map((d) => ({
        ...d,
        "-log10(pvalue)": -Math.log10(d.pvalue), // Converting p-values for plotting
        // Classify based on the corrected threshold
        Category:
          "-log10(pvalue)" >= pValueThreshold
            ? d.log2FoldChange > 0
              ? "Up Regulated"
              : "Down Regulated"
            : "Non-Significant",
      }));

      processedData.forEach((d) => {
        if (d["-log10(pvalue)"] >= pValueThreshold) {
          d.Category = d.log2FoldChange > 0 ? "Up Regulated" : "Down Regulated";
        }
      });

      const categories = ["Non-Significant", "Up Regulated", "Down Regulated"];
      const colors = ["lightslategray", "blue", "red"];

      // Generate marker traces for all categories
      const markerTraces = categories.map((category, index) => {
        const categoryData = processedData.filter(
          (d) => d.Category === category
        );
        return {
          x: categoryData.map((d) => d.log2FoldChange),
          y: categoryData.map((d) => d["-log10(pvalue)"]),
          mode: "markers",
          marker: { color: colors[index], size: 3.5 },
          type: "scattergl",
          customdata: categoryData.map((d) => [
            d.gene_name,
            d.gene_id,
            d.gene_biotype,
            d.gene_description,
          ]),
          hovertemplate:
            category === "Non-Significant"
              ? "gene_name=%{customdata[0]}<br>-log10(pvalue)=%{y}<br>log2FoldChange=%{x}<br>gene_id=%{customdata[1]}<extra></extra>"
              : "gene_name=%{customdata[0]}<br>-log10(pvalue)=%{y}<extra></extra>",
          name: category,
        };
      });
      const textTraces = processedData
        .filter((d) => d["-log10(pvalue)"] >= pValueThreshold)
        .map((d) => ({
          x: [d.log2FoldChange],
          y: [d["-log10(pvalue)"]],
          mode: "text",
          text: [d.gene_name],
          textposition: "top center",
          type: "scattergl",
          hoverinfo: "none", // Text traces do not need hover info as it's provided by the marker traces
          showlegend: false,
        }));

      const layout = {
        xaxis: {
          title: "Log2 Fold Change",
          showgrid: true,
          gridwidth: 0.5,
          gridcolor: "lightgrey",
          zeroline: true,
          zerolinecolor: "grey",
          zerolinewidth: 1,
        },
        yaxis: {
          title: "-Log10(pvalue)",
          showgrid: true,
          gridwidth: 0.5,
          gridcolor: "lightgrey",
        },
        plot_bgcolor: "white",
        autosize: true,
        margin: { l: 30, r: 0, t: 20, b: 30 },
        showlegend: true,
        modebar: {
          orientation: "v",
          activecolor: "gray",
        },
      };

      const config = {
        displayModeBar: true,
      };

      Plotly.newPlot(
        plotContainerRef.current,
        [...markerTraces, ...textTraces],
        layout,
        config,
        {
          responsive: true,
        }
      );
      plotContainerRef.current.on("plotly_click", handlePlotlyClick);
    }
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
        plotContainerRef.current.removeListener(
          "plotly_click",
          handlePlotlyClick
        );
      }
    };
  }, [threshold, data]);

  return (
    <div
      ref={plotContainerRef}
      style={{
        width: "100%",
        maxWidth: 1300,
        maxHeight: 600,
        marginTop: 10,
        marginBottom: 30,
        height: "100%",
      }}
    />
  );
};

export default VolcanoPlot;

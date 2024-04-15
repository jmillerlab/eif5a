import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const NetworkVisualization = () => {
  const svgRef = useRef();

  useEffect(() => {
    // Load CSV data
    d3.csv("processed_network_data.csv")
      .then((data) => {
        if (!data.length) {
          console.error("No data loaded");
          return;
        }

        console.log("Data loaded", data); // Check what the data looks like

        const svg = d3.select(svgRef.current);
        const width = +svg.attr("width");
        const height = +svg.attr("height");

        // Assuming data columns are correctly named and data is formatted correctly
        const nodes = Array.from(
          new Set(data.flatMap((d) => [d.Node1_ID, d.Node2_ID])),
          (id) => ({
            id,
            annotation:
              data.find((d) => d.Node1_ID === id).Node1_Annotation || "",
          })
        );
        const links = data.map((d) => ({
          source: d.Node1_ID,
          target: d.Node2_ID,
          score: d.Interaction_Score,
        }));

        const simulation = d3
          .forceSimulation(nodes)
          .force(
            "link",
            d3.forceLink(links).id((d) => d.id)
          )
          .force("charge", d3.forceManyBody())
          .force("center", d3.forceCenter(width / 2, height / 2));

        const link = svg
          .selectAll(".link")
          .data(links)
          .join("line")
          .classed("link", true)
          .style("stroke", "#aaa")
          .style("stroke-width", (d) => Math.sqrt(d.score));

        const node = svg
          .selectAll(".node")
          .data(nodes)
          .join("circle")
          .classed("node", true)
          .attr("r", 5)
          .style("fill", "red")
          .call(drag(simulation));

        simulation.on("tick", () => {
          link
            .attr("x1", (d) => d.source.x)
            .attr("y1", (d) => d.source.y)
            .attr("x2", (d) => d.target.x)
            .attr("y2", (d) => d.target.y);
          node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
        });

        function drag(simulation) {
          return d3
            .drag()
            .on("start", (event, d) => {
              if (!event.active) simulation.alphaTarget(0.3).restart();
              d.fx = d.x;
              d.fy = d.y;
            })
            .on("drag", (event, d) => {
              d.fx = event.x;
              d.fy = event.y;
            })
            .on("end", (event, d) => {
              if (!event.active) simulation.alphaTarget(0);
              d.fx = null;
              d.fy = null;
            });
        }
      })
      .catch((error) => {
        console.error("Failed to load data", error);
      });
  }, []);

  return <svg ref={svgRef} width={800} height={600} />;
};

export default NetworkVisualization;

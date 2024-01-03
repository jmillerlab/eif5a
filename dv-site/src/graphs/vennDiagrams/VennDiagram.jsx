import React, { useEffect, useRef } from "react";
import anychart from "anychart";
import "./venndiagram.css";

const VennDiagram = () => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const chartContainer = chartContainerRef.current;

    // create data
    const data = [
      { x: "A", value: 100 }, //A
      { x: "B", value: 100 },
      { x: "C", value: 100 },
      { x: ["A", "B"], value: 25 },
      { x: ["B", "C"], value: 25 },
      { x: ["A", "C"], value: 25 },
      { x: ["A", "C", "B"], value: 25 },
    ];

    // create a chart and set the data
    const chart = anychart.venn(data);
    chart.labels().enabled(false);

    // configure labels of intersections
    chart.intersections().labels().format("{%x}");

    // set the container id
    chart.container(chartContainer); // Use the container element

    // initiate drawing the chart
    chart.draw();

    // Handle window resize to update chart size
    const handleResize = () => {
      chart.bounds(
        0,
        0,
        chartContainer.offsetWidth,
        chartContainer.offsetHeight
      );
    };

    // Attach the event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      chart.dispose(); // Dispose of the chart to prevent memory leaks
    };
  }, []); // Run the effect only once on mount

  return <div ref={chartContainerRef} className="chartCard"></div>; // Use the container element
};

export default VennDiagram;

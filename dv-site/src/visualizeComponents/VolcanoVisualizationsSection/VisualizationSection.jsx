import "./DEGListDatasets.css";
import React, { useState, useEffect } from "react";
import PlotlyGraph from "../../graphs/PlotlyGraph";
import Dropdown from "../DropDown";
import MultiStateToggle from "../MultiStateToggle";
import DownArrow from "../../generalComponents/DownArrow";
import PlotlyBarChart from "../../barCharts/PlotlyJSGraph";
import PlotlyJSPlot from "../../graphs/PlotlyJSPlot";
import "../../graphs/PlotlyGraph.css";
import GeneInfoComponent from "./GeneInfo";
import { AnimatePresence } from "framer-motion";

import {
  chartDataMapping,
  dropdownOptions,
  dropdownTerms,
  DEGdropdownLength,
  termsLength,
  // plotData,
} from "./imports";

export default function DEGListDatasets() {
  const [selectedDropdown, setSelectedDropdown] = useState("-- choose --");
  const [dataFromChild, setDataFromChild] = useState("All Genes");
  const [numTerms, setNumTerms] = useState(10);
  const [selectedChartData, setSelectedChartData] = useState(null);
  // const [selectedPlot, setSelectedPlot] = useState(null);
  const [mainCategory, setMainCategory] = useState("DHS_DOHHvsWT_EC");
  const [subCategory, setSubCategory] = useState("KEGG");
  const [pValueThreshold, setpValThreshold] = useState("0.05");
  const [tempThreshold, setTempThreshold] = useState("");
  const [showGeneInfo, setShowGeneInfo] = useState(null);
  const [clickedPointData, setClickedPointData] = useState(null);
  const [graphModule, setGraphModule] = useState(null);

  const handleDataFromChild = (data) => {
    if (data !== "KEGG" && data !== "Reactome") {
      setSubCategory("WikiPathways");
    } else {
      setSubCategory(data);
    }
    setDataFromChild(data);
    if (data === "All Genes") {
      // setSelectedDropdown("-- choose --");
      setpValThreshold(0.05);
    } else {
      setSelectedDropdown("DHS_DOHHvsWT_EC");
      setNumTerms(10);
    }
  };

  useEffect(() => {
    const mainCategory =
      selectedDropdown !== "-- choose --" ? selectedDropdown : null;
    if (mainCategory) {
      const chartData = chartDataMapping[mainCategory]?.[subCategory];
      // const plot = plotData[mainCategory];
      setSelectedChartData(chartData);
      // setSelectedPlot(plot);
    } else {
      setSelectedChartData(null);
    }
  }, [selectedDropdown, subCategory]);
  // console.log("SELECTED PLOT", selectedPlot);

  const handleMainCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedDropdown(value);
    setMainCategory(value);
    // setNumTerms(10);
  };

  const handleTermChange = (e) => {
    const value = e.target.value;
    setNumTerms(parseInt(value));
  };

  // console.log(pValueThreshold);
  // console.log(tempThreshold);
  const handleThresholdChange = (e) => {
    setTempThreshold(e.target.value);
  };

  const handleSubmitThreshold = () => {
    setpValThreshold(tempThreshold);
  };

  const handlePlotlyClick = (data) => {
    const { points } = data;
    const clickedPoint = points[0];
    setClickedPointData({
      geneName: clickedPoint.customdata[0],
      geneId: clickedPoint.customdata[1],
      geneBiotype: clickedPoint.customdata[2],
      geneDescription: clickedPoint.customdata[3],
      log2FoldChange: clickedPoint.x,
      log10pValue: clickedPoint.y,
    });
    setShowGeneInfo(true);
  };
  const handleCloseClick = () => {
    setShowGeneInfo(false);
    console.log(showGeneInfo);
  };

  useEffect(() => {
    async function loadGraphData() {
      if (dataFromChild === "All Genes" && selectedDropdown != "-- choose --") {
        let module;
        switch (selectedDropdown) {
          case "DHS_DOHHvsWT_EC":
            module = await import(
              "../../graphs/DHS_DOHHvsWT_EC/DHS_DOHHvsWT_EC.DEG.all.json"
            );

            break;
          case "DHS_DOHHvsTar4_EC":
            module = await import(
              "../../graphs/DHS_DOHHvsTar4_EC/DHS_DOHHvsTar4_EC.DEG.all.json"
            );
            break;
          case "eIF5A_DDvsDHS_DOHH":
            module = await import(
              "../../graphs/eIF5A_DDvsDHS_DOHH/eIF5A_DDvsDHS_DOHH.DEG.all.json"
            );
            break;

          case "eIF5A_DDvseIF5A":
            module = await import(
              "../../graphs/eIF5A_DDvseIF5A/eIF5A_DDvseIF5A.DEG.all.json"
            );
            break;
          case "eIF5A_DDvsK50A_DD":
            module = await import(
              "../../graphs/eIF5A_DDvsK50A_DD/eIF5A_DDvsK50A_DD.DEG.all.json"
            );
            break;
          case "eIF5A_DDvsTar4_EC":
            module = await import(
              "../../graphs/eIF5A_DDvsTar4_EC/eIF5A_DDvsTar4_EC.DEG.all.csv.json"
            );
            break;
          case "eIF5A_DDvsWT_EC":
            module = await import(
              "../../graphs/eIF5A_DDvsWT_EC/eIF5A_DDvsWT_EC.DEG.all.json"
            );
            break;
          case "eIF5AvsTar4_EC":
            module = await import(
              "../../graphs/eIF5AvsTar4_EC/eIF5AvsTar4_EC.DEG.all.json"
            );
            break;
          case "eIF5AvsWT_EC":
            module = await import(
              "../../graphs/eIF5AvsWT_EC/eIF5AvsWT_EC.DEG.all.json"
            );
            break;
          case "K50A_DDvsDHS_DOHH":
            module = await import(
              "../../graphs/K50A_DDvsDHS_DOHH/K50A_DDvsDHS_DOHH.DEG.all.json"
            );
            break;
          case "K50A_DDvsTar4_EC":
            module = await import(
              "../../graphs/K50A_DDvsTar4_EC/K50A_DDvsTar4_EC.DEG.all.json"
            );
            break;
          case "K50A_DDvsWT_EC":
            module = await import(
              "../../graphs/K50A_DDvsWT_EC/K50A_DDvsWT_EC.DEG.all.json"
            );
            break;
          case "Tar4_ECvsWT_EC":
            module = await import(
              "../../graphs/Tar4_ECvsWT_EC/Tar4_ECvsWT_EC.DEG.all.json"
            );
            break;
          default:
            module = null;
        }

        setGraphModule(module.default);
      }
    }
    loadGraphData();
  }, [dataFromChild, selectedDropdown, graphModule]);

  useEffect(() => {
    console.log("graphModule after state update:", graphModule);
  }, [graphModule]);

  return (
    <div className="DEG-container-expanded">
      <MultiStateToggle sendDataToParent={handleDataFromChild} />
      {dataFromChild === "All Genes" && (
        <>
          <div className="all-genes-container">
            <div className="view-pathway">
              <h3 style={{ margin: 30 }}>View a Pathway</h3>
              <DownArrow />
            </div>
          </div>
          <div className="DEG-box">
            <Dropdown
              className={DEGdropdownLength}
              selectedDropdown={selectedDropdown}
              onChange={handleMainCategoryChange}
              options={dropdownOptions}
            />

            {selectedChartData && (
              <>
                <div className="chart-container">
                  <div className="sub-chart-container">
                    <h3
                      style={{
                        color: "black",
                        minWidth: 150,
                        height: 50,
                        textAlign: "center",
                        marginTop: 0,
                      }}
                    >
                      Enter the significance level. Typically set at 0.05.{" "}
                    </h3>
                    <div className="threshold-input-container">
                      <input
                        type="number"
                        value={tempThreshold}
                        onChange={handleThresholdChange}
                        placeholder="0.05"
                        id="alphaThreshold"
                        name="alphaThreshold"
                        defaultValue="0.05"
                        min="-2"
                        max="2"
                        step="0.01"
                        className="threshold-input-style"
                      />

                      <button
                        className="threshold-submit-button"
                        onClick={handleSubmitThreshold}
                      >
                        Submit
                      </button>
                      <span className="tooltip">
                        ?
                        <span className="tooltip-text">
                          This is the global significance level (alpha) for all
                          tests before applying the Bonferroni correction. It
                          will be adjusted to account for multiple comparisons.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <p
                  style={{
                    color: "black",
                    textAlign: "center",
                    marginTop: "30px",
                    // marginBottom: "10px",
                  }}
                >
                  {selectedDropdown}
                </p>
                <AnimatePresence>
                  {showGeneInfo && (
                    <GeneInfoComponent
                      data={clickedPointData}
                      onClose={handleCloseClick} // Pass handleCloseClick correctly here
                    />
                  )}
                </AnimatePresence>
                {graphModule ? (
                  <PlotlyJSPlot
                    data={graphModule}
                    threshold={pValueThreshold}
                    handlePlotlyClick={handlePlotlyClick}
                  />
                ) : (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "100px",
                      color: "black",
                      fontSize: "30px",
                      textAlign: "center",
                    }}
                  >
                    Loading...
                  </div>
                )}
              </>
            )}
          </div>
        </>
      )}
      {dataFromChild === "KEGG" && (
        <>
          <Dropdown
            className={DEGdropdownLength}
            selectedDropdown={selectedDropdown}
            onChange={handleMainCategoryChange}
            options={dropdownOptions}
          />
          <Dropdown
            className={termsLength}
            selectedDropdown={numTerms.toString()}
            onChange={(e) => setNumTerms(parseInt(e.target.value, 10))}
            options={dropdownTerms}
          />
          {selectedChartData && (
            <PlotlyBarChart
              chart={selectedChartData}
              numTerms={numTerms}
              mainCategory={mainCategory}
              subCategory={subCategory}
            />
          )}
        </>
      )}
      {dataFromChild === "Wiki\nPathways" && (
        <>
          <Dropdown
            className={DEGdropdownLength}
            selectedDropdown={selectedDropdown}
            onChange={handleMainCategoryChange}
            options={dropdownOptions}
          />
          <Dropdown
            className={termsLength}
            selectedDropdown={numTerms.toString()}
            onChange={(e) => setNumTerms(parseInt(e.target.value, 10))}
            options={dropdownTerms}
          />
          {selectedChartData && (
            <PlotlyBarChart chart={selectedChartData} numTerms={numTerms} />
          )}
        </>
      )}
      {dataFromChild === "Reactome" && (
        <>
          <Dropdown
            className={DEGdropdownLength}
            selectedDropdown={selectedDropdown}
            onChange={handleMainCategoryChange}
            options={dropdownOptions}
          />
          <Dropdown
            className={termsLength}
            selectedDropdown={numTerms.toString()}
            onChange={handleTermChange}
            options={dropdownTerms}
          />
          {selectedChartData && (
            <PlotlyBarChart chart={selectedChartData} numTerms={numTerms} />
          )}
        </>
      )}
    </div>
  );
}
{
  /* <iframe
            src="https://version-12-0.string-db.org/cgi/globalenrichment?networkId=bBmGA3kwle9n"
            title="Embedded Page"
            width="100%"
            height="1150px"
            frameBorder="0"
            scrolling="auto"
          ></iframe> */
}

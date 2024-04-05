import "./DEGListDatasets.css";
import React, { useState, useEffect } from "react";
import PlotlyGraph from "../../graphs/PlotlyGraph";
import Dropdown from "../DropDown";
import MultiStateToggle from "../MultiStateToggle";
import DownArrow from "../../generalComponents/DownArrow";
import PlotlyBarChart from "../../barCharts/PlotlyJSGraph";
import PlotlyJSPlot from "../../graphs/PlotlyJSPlot";
import "../../graphs/PlotlyGraph.css";
import {
  chartDataMapping,
  dropdownOptions,
  dropdownTerms,
  DEGdropdownLength,
  termsLength,
  plotData,
} from "./imports";

export default function DEGListDatasets() {
  const [selectedDropdown, setSelectedDropdown] = useState("-- choose --");
  const [dataFromChild, setDataFromChild] = useState("All Genes");
  const [numTerms, setNumTerms] = useState(10);
  const [selectedChartData, setSelectedChartData] = useState(null);
  const [selectedPlot, setSelectedPlot] = useState(null);
  const [mainCategory, setMainCategory] = useState("DHS_DOHHvsWT_EC");
  const [subCategory, setSubCategory] = useState("KEGG");
  const [pValueThreshold, setpValThreshold] = useState("0.05");
  const [tempThreshold, setTempThreshold] = useState("");

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
      const plot = plotData[mainCategory];
      setSelectedChartData(chartData);
      setSelectedPlot(plot);
    } else {
      setSelectedChartData(null);
    }
  }, [selectedDropdown, subCategory]);

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

  console.log(pValueThreshold);
  console.log(tempThreshold);
  const handleThresholdChange = (e) => {
    setTempThreshold(e.target.value);
  };

  const handleSubmitThreshold = () => {
    setpValThreshold(tempThreshold);
  };

  return (
    <div className="DEG-container-expanded">
      <MultiStateToggle sendDataToParent={handleDataFromChild} />
      {dataFromChild === "All Genes" && (
        <>
          <div
            style={{
              color: "black",
              width: "100%",
              height: 100,
              textAlign: "center",
              marginTop: 15,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
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
                <div
                  style={{
                    marginTop: 5,
                    display: "flex",
                    flexDirection: "row",
                    width: 450,
                    // borderRadius: 30,
                  }}
                >
                  <div
                    style={{
                      marginTop: 20,
                      width: 500,
                      height: 100,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
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
                    <div
                      style={{
                        margin: "20px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
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
                        style={{
                          // marginRight: "5px",
                          width: 70,
                          height: 40,
                          color: "black",
                          backgroundColor: "white",
                          border: "solid",
                          borderWidth: 1,
                          padding: 7,
                          borderRadius: 7,
                          borderColor: "gray",
                          fontSize: 15,
                          textAlign: "center",
                          boxShadow: "0px 10px 15px 0px rgba(39, 39, 39, 0.15)",
                        }}
                      />
                      <span className="tooltip">
                        ?
                        <span className="tooltip-text">
                          This is the global significance level (alpha) for all
                          tests before applying the Bonferroni correction. It
                          will be adjusted to account for multiple comparisons.
                        </span>
                      </span>

                      <button
                        style={{
                          backgroundColor: "gray",
                          width: 55,
                          height: 40,
                          borderRadius: 7,
                          marginLeft: 15,
                          border: "solid",
                          borderWidth: 1,
                          borderColor: "black",
                          boxShadow: "0px 10px 15px 0px rgba(39, 39, 39, 0.15)",
                        }}
                        onClick={handleSubmitThreshold}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
                <p
                  style={{
                    color: "black",
                    textAlign: "center",
                    marginTop: "70px",
                    // marginBottom: "10px",
                  }}
                >
                  {selectedDropdown}
                </p>
                <PlotlyJSPlot data={selectedPlot} threshold={pValueThreshold} />
              </>
            )}
          </div>
          {/* <iframe
            src="https://version-12-0.string-db.org/cgi/globalenrichment?networkId=bBmGA3kwle9n"
            title="Embedded Page"
            width="100%"
            height="1150px"
            frameBorder="0"
            scrolling="auto"
          ></iframe> */}
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

import "./DEGListDatasets.css";
import React, { useState, useEffect } from "react";
import PlotlyGraph from "../../graphs/PlotlyGraph";
import Dropdown from "../DropDown";
import MultiStateToggle from "../MultiStateToggle";
import DownArrow from "../../generalComponents/DownArrow";
import EnrichmentLink from "../EnrichmentLink";
import { color } from "framer-motion";
export default function DEGListDatasets() {
  const [selectedDropdown, setSelectedDropdown] = useState("-- choose --");
  const [dataFromChild, setDataFromChild] = useState("All Genes");

  const handleDataFromChild = (data) => {
    console.log("Data Received From Child:", data);
    setDataFromChild(data);
    setSelectedDropdown("-- choose --");
  };

  const DEGdropdownLength = "drop-down";

  {
    /*

    TAR4 mice _Sham injection vs. Sham injection _ wt mice

Deoxyhypusine synthase Deoxyhupysine Hydroxylase (DD) _TAR4 mice vs. Sham injection _ wt mice

Deoxyhypusine synthase Deoxyhupysine Hydroxylase (DD) _TAR4 mice vs. Sham injection _ TAR4 mice

Eukaryotic Translation Initiation Factor 5A _TAR4 mice vs. Sham injection _ wt mice

Eukaryotic Translation Initiation Factor 5A_DD_TAR4 mice vs. Sham injection _ wt mice

Eukaryotic Translation Initiation Factor 5A_DDK50A_TAR4 mice vs. Sham injection _ wt mice

Eukaryotic Translation Initiation Factor 5A _TAR4 mice vs. Sham injection _ TAR4 mice

Eukaryotic Translation Initiation Factor 5A_DD_TAR4 mice vs. Sham injection _ TAR4 mice

Eukaryotic Translation Initiation Factor 5A_DDK50A_TAR4 mice vs. Sham injection _ TAR4 mice
*/
  }

  const dropdownOptions = [
    { graph: "-- choose --" },
    {
      graph: "DHS_DOHHvsWT_EC",
    },

    {
      graph: "DHS_DOHHvsTar4_EC",
    },
    {
      graph: "eIF5A_DDvsDHS_DOHH",
    },
    {
      graph: "eIF5A_DDvseIF5A",
    },
    {
      graph: "eIF5A_DDvsK50A_DD",
    },
    {
      graph: "eIF5A_DDvsTar4_EC",
    },
    {
      graph: "eIF5A_DDvsWT_EC",
    },
    {
      graph: "eIF5AvsTar4_EC",
    },
    {
      graph: "eIF5AvsWT_EC",
    },
    {
      graph: "K50A_DDvsDHS_DOHH",
    },
    {
      graph: "K50A_DDvsTar4_EC",
    },
    {
      graph: "K50A_DDvsWT_EC",
    },
    {
      graph: "Tar4_ECvsWT_EC",
    },
  ];

  return (
    <>
      <div className="DEG-container-expanded">
        <>
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
                  <h2 style={{ marginBottom: 60 }}>
                    Explore the entire enrichment analysis or view relevant
                    information to a specific pathway
                  </h2>
                  <DownArrow />
                  <h3>Choose a Pathway</h3>
                </div>
              </div>

              <div className="DEG-box">
                <Dropdown
                  className={DEGdropdownLength}
                  selectedDropdown={selectedDropdown}
                  onChange={(e) => setSelectedDropdown(e.target.value)}
                  options={dropdownOptions}
                />

                {selectedDropdown === "-- choose --" ? (
                  <>
                    <div style={{ width: 30, height: 30, margin: 10 }}></div>
                  </>
                ) : (
                  dropdownOptions.map(
                    (option, index) =>
                      selectedDropdown === option.graph && (
                        <div key={index}>
                          <div className="graph-container">
                            <PlotlyGraph
                              file={`${option.graph}/${option.graph}.DEG.all`}
                            />
                          </div>
                        </div>
                      )
                  )
                )}
              </div>

              <iframe
                src="https://version-12-0.string-db.org/cgi/globalenrichment?networkId=bBmGA3kwle9n"
                title="Embedded Page"
                width="100%"
                height="1150px"
                frameBorder="0"
                scrolling="auto"
              ></iframe>
            </>
          )}
          {dataFromChild === "KEGG" && (
            <div
              style={{
                display: "flex",
                width: "100%",
                height: 500,
                color: "black",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Specific Visualizations Coming Soon
            </div>
          )}
          {dataFromChild === "Wiki\nPathways" && (
            <div
              style={{
                display: "flex",

                width: "100%",
                height: 500,
                color: "black",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Specific Visualizations Coming Soon
            </div>
          )}
          {dataFromChild === "Reactome" && (
            <div
              style={{
                display: "flex",

                width: "100%",
                height: 500,
                color: "black",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Specific Visualizations Coming Soon
            </div>
          )}
        </>
      </div>
    </>
  );
}

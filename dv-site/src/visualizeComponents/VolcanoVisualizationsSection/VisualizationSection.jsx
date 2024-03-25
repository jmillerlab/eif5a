import "./DEGListDatasets.css";
import React, { useState, useEffect } from "react";
import PlotlyGraph from "../../graphs/PlotlyGraph";
import Dropdown from "../DropDown";
import MultiStateToggle from "../MultiStateToggle";
import DownArrow from "../../generalComponents/DownArrow";
import EnrichmentLink from "../EnrichmentLink";
import { color } from "framer-motion";
import BarChart from "../../barCharts/DHS_DOHHvsTar4_EC";
import PlotlyBarChart from "../../barCharts/PlotlyJS";
export default function DEGListDatasets() {
  const [selectedDropdown, setSelectedDropdown] = useState("-- choose --");
  const [dataFromChild, setDataFromChild] = useState("All Genes");
  const [numTerms, setNumTerms] = useState(0);

  const handleDataFromChild = (data) => {
    console.log("Data Received From Child:", data);
    setDataFromChild(data);
    setSelectedDropdown("-- choose --");
  };
  useEffect(() => {
    if (selectedDropdown !== "-- choose --") {
      // Convert selectedDropdown to a number and update numTerms
      setNumTerms(parseInt(selectedDropdown, 10));
    }
  }, [selectedDropdown]);

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
  const dropdownTerms = [
    { label: "-- choose --", value: "-- choose --" },
    { label: "10", value: 10 },
    { label: "20", value: 20 },
    { label: "50", value: 50 },
  ];
  const termsLength = "terms";

  const dropdownOptions = [
    { label: "-- choose --" },
    {
      label: "DHS_DOHHvsWT_EC",
    },

    {
      label: "DHS_DOHHvsTar4_EC",
    },
    {
      label: "eIF5A_DDvsDHS_DOHH",
    },
    {
      label: "eIF5A_DDvseIF5A",
    },
    {
      label: "eIF5A_DDvsK50A_DD",
    },
    {
      label: "eIF5A_DDvsTar4_EC",
    },
    {
      label: "eIF5A_DDvsWT_EC",
    },
    {
      label: "eIF5AvsTar4_EC",
    },
    {
      label: "eIF5AvsWT_EC",
    },
    {
      label: "K50A_DDvsDHS_DOHH",
    },
    {
      label: "K50A_DDvsTar4_EC",
    },
    {
      label: "K50A_DDvsWT_EC",
    },
    {
      label: "Tar4_ECvsWT_EC",
    },
  ];

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
                  selectedDropdown === option.label && (
                    <div key={index}>
                      <div className="graph-container">
                        <PlotlyGraph
                          file={`${option.label}/${option.label}.DEG.all`}
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
        // <BarChart />

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
        <>
          <Dropdown
            className={termsLength}
            selectedDropdown={selectedDropdown}
            onChange={(e) => setSelectedDropdown(e.target.value)}
            options={dropdownTerms}
          />
          {selectedDropdown === "-- choose --" ? (
            <PlotlyBarChart numTerms={10} />
          ) : (
            <PlotlyBarChart numTerms={numTerms} />
          )}

          {/* <PlotlyBarChart numTerms={selectedDropdown} /> */}
        </>
        // <div
        //   style={{
        //     display: "flex",

        //     width: "100%",
        //     height: 500,
        //     color: "black",
        //     alignItems: "center",
        //     justifyContent: "center",
        //   }}
        // >
        //   Specific Visualizations Coming Soon
        // </div>
      )}
    </div>
  );
}

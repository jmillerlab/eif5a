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

  const dropdownOptions = [
    { graph: "-- choose --" },
    {
      graph: "DHS_DOHHvsWT_EC",
      link: "https://string-db.org/cgi/globalenrichment?taskId=bXXspEtxkiqI&sessionId=bndelpK3FA9t",
    },
    {
      graph: "DHS_DOHHvsTar4_EC",
      link: "https://string-db.org/cgi/globalenrichment?taskId=b2GvYTJtmwM6&sessionId=bndelpK3FA9t",
    },
    {
      graph: "eIF5A_DDvsDHS_DOHH",
      link: "https://string-db.org/cgi/globalenrichment?taskId=bpk8m7buuCdk&sessionId=bndelpK3FA9t",
    },
    {
      graph: "eIF5A_DDvseIF5A",
      link: "https://string-db.org/cgi/globalenrichment?taskId=bja6U6MDoqx2&sessionId=bndelpK3FA9t",
    },
    {
      graph: "eIF5A_DDvsK50A_DD",
      link: "https://string-db.org/cgi/globalenrichment?taskId=bPnfVp4lXDSp&sessionId=bndelpK3FA9t",
    },
    {
      graph: "eIF5A_DDvsTar4_EC",
      link: "https://string-db.org/cgi/globalenrichment?taskId=b5BZZ7zTSj0H&sessionId=bndelpK3FA9t",
    },
    {
      graph: "eIF5A_DDvsWT_EC",
      link: "https://string-db.org/cgi/globalenrichment?taskId=baTmSkYGXvyP&sessionId=bndelpK3FA9t",
    },
    {
      graph: "eIF5AvsTar4_EC",
      link: "https://string-db.org/cgi/globalenrichment?taskId=b55HyzDBWZGW&sessionId=bndelpK3FA9t",
    },
    {
      graph: "eIF5AvsWT_EC",
      link: "https://string-db.org/cgi/globalenrichment?taskId=b5Snx9kWVdzb&sessionId=bndelpK3FA9t",
    },
    {
      graph: "K50A_DDvsDHS_DOHH",
      link: "https://string-db.org/cgi/globalenrichment?taskId=bDStXBpv46p2&sessionId=bndelpK3FA9t",
    },
    {
      graph: "K50A_DDvsTar4_EC",
      link: "https://string-db.org/cgi/globalenrichment?taskId=bWsR84okEunn&sessionId=bndelpK3FA9t",
    },
    {
      graph: "K50A_DDvsWT_EC",
      link: "https://string-db.org/cgi/globalenrichment?taskId=bFHXogsut7g2&sessionId=bndelpK3FA9t",
    },
    {
      graph: "Tar4_ECvsWT_EC",
      link: "https://string-db.org/cgi/globalenrichment?taskId=b6jpYUolgJ4X&sessionId=bndelpK3FA9t",
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
                    {/* <DownArrow /> */}
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
                            {/* <EnrichmentLink link={option.link} /> */}
                          </div>
                        </div>
                      )
                  )
                )}
              </div>

              <iframe
                src="https://version-12-0.string-db.org/cgi/globalenrichment?pollingId=bxqKHeLtd1aO&sessionId=b2dBxIlK90Pc&urldisam=bjPCNttqiP6a"
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

import "./DEGListDatasets.css";
import React, { useState, useEffect } from "react";
import PlotlyGraph from "../../graphs/PlotlyGraph";
import Dropdown from "../DropDown";
import MultiStateToggle from "../MultiStateToggle";
import DownArrow from "../../generalComponents/DownArrow";

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
    "-- choose --",
    "DHS_DOHHvsWT_EC",
    "DHS_DOHHvsTar4_EC",
    "eIF5A_DDvsDHS_DOHH",
    "eIF5A_DDvseIF5A",
    "eIF5A_DDvsK50A_DD",
    "eIF5A_DDvsTar4_EC",
    "eIF5A_DDvsWT_EC",
    "eIF5AvsTar4_EC",
    "eIF5AvsWT_EC",
    "K50A_DDvsDHS_DOHH",
    "K50A_DDvsTar4_EC",
    "K50A_DDvsWT_EC",
    "Tar4_ECvsWT_EC",
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
                <h2>Visualize Specific Pathway</h2>
                <div style={{ marginTop: 35 }}>
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
                    {/* <DownArrow /> */}
                  </>
                ) : (
                  dropdownOptions.map(
                    (option, index) =>
                      selectedDropdown === option && (
                        <div key={index}>
                          <PlotlyGraph file={`${option}/${option}.DEG.all`} />
                        </div>
                      )
                  )
                )}
              </div>

              <iframe
                src="https://version-12-0.string-db.org/cgi/globalenrichment?pollingId=bAFWRKSnoaYE&sessionId=bqP6l22wVFkY&urldisam=byGkgwIQG8hy"
                title="Embedded Page"
                width="100%"
                height="1150px"
                frameBorder="0"
                scrolling="auto"
              ></iframe>
            </>
          )}
        </>
      </div>
    </>
  );
}

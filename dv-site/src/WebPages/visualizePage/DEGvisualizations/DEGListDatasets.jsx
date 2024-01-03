import "./deglistdatasets.css";
import React, { useState, useEffect } from "react";
import DEGListVisButton from "./DEGListVisButton";
import PlotlyGraph from "../../../graphs/PlotlyGraph";
import Dropdown from "../DropDown";
import DownArrow from "../DownArrow";
// import Toggle from "../ToggleComponent";

export default function DEGListDatasets() {
  const [selectedDropdown, setSelectedDropdown] = useState("DHS_DOHHvsWT_EC");
  const [isTextInfoPressed, setIsTextInfoPressed] = useState(false);
  const [plotType, setPlotType] = useState(false);

  const handleTextInfoClick = () => {
    setIsTextInfoPressed((prevIsTextInfoPressed) => !prevIsTextInfoPressed);
  };
  const handleChange = (e) => {
    setSelectedDropdown(e.target.value);
  };

  const containerClassName = isTextInfoPressed
    ? "DEG-container-expanded"
    : "DEG-container";

  const dropdownOptions = [
    "DHS_DOHHvsWT_EC",
    "eIF5A_DDvsTar4_EC",
    "eIF5A_DDvsWT_EC",
    "eIF5AvsWT_EC",
    "Tar4_ECvsWT_EC",
  ];
  return (
    <>
      <DEGListVisButton onClick={handleTextInfoClick} />

      <div className={containerClassName}>
        {isTextInfoPressed ? (
          <>
            <div>
              <Dropdown
                value={selectedDropdown}
                onChange={handleChange}
                options={dropdownOptions}
              />
            </div>
            <div className="DEG-box">
              {selectedDropdown == "DHS_DOHHvsWT_EC" ? (
                <>
                  {/* <Toggle /> */}
                  <div className="plot-container">
                    <div className="plot-spacing">
                      <p
                        style={{
                          color: "black",
                          textAlign: "center",
                          marginTop: "60px",
                        }}
                      >
                        DHS_DOHHvsWT_EC.DEG
                      </p>
                      <PlotlyGraph file={"DHS_DOHHvsWT_EC.DEG.all"} />
                    </div>
                  </div>
                  <div className="plot-spacing">
                    <p style={{ color: "black", textAlign: "center" }}>
                      DHS_DOHHvsWT_EC.cancer
                    </p>
                    <PlotlyGraph file={"DHS_DOHHvsWT_EC.all.cancer"} />
                  </div>
                </>
              ) : (
                ""
              )}
              {selectedDropdown == "eIF5A_DDvsTar4_EC" ? (
                <div>eIF5A_DDvsTar4_EC</div>
              ) : (
                ""
              )}
              {selectedDropdown == "eIF5A_DDvsWT_EC" ? (
                <div>eIF5A_DDvsWT_EC</div>
              ) : (
                ""
              )}
              {selectedDropdown == "eIF5AvsWT_EC" ? (
                <div>eIF5AvsWT_EC</div>
              ) : (
                ""
              )}
              {selectedDropdown == "Tar4_ECvsWT_EC" ? (
                <div>Tar4_ECvsWT_EC</div>
              ) : (
                ""
              )}
            </div>
          </>
        ) : (
          // <div className="down-arrow">&#5167;</div>
          // <div className="scroll-down"></div>
          <DownArrow />
        )}
      </div>
    </>
  );
}

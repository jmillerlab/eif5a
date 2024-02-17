import "./DEGListDatasets.css";
import React, { useState, useEffect } from "react";
import PlotlyGraph from "../../graphs/PlotlyGraph";
import Dropdown from "../DropDown";
import { motion as m } from "framer-motion";
import MultiStateToggle from "../MultiStateToggle";
import ExpandingComponentButton from "../../generalComponents/ExpandComponentButton";
import ViewAllPlotsComponent from "./ViewAllPlotsComponent";
import DownArrow from "../../generalComponents/DownArrow";

export default function DEGListDatasets() {
  const [selectedDropdown, setSelectedDropdown] = useState("-- choose --");
  const [isTextInfoPressed, setIsTextInfoPressed] = useState(false);
  const [dataFromChild, setDataFromChild] = useState("All Genes");

  const handleDataFromChild = (data) => {
    console.log("Data Received From Child:", data);
    setDataFromChild(data);
    // Reset dropdown to "-- choose --" when text button is clicked
    setSelectedDropdown("-- choose --");
  };

  const handleTextInfoClick = () => {
    setIsTextInfoPressed((prevIsTextInfoPressed) => !prevIsTextInfoPressed);
    // Reset dropdown to "-- choose --" when text button is clicked
    setSelectedDropdown("-- choose --");
  };

  useEffect(() => {
    if (dataFromChild !== "All Genes") {
      setIsTextInfoPressed(false);
    }
  }, [dataFromChild]);

  useEffect(() => {
    if (selectedDropdown !== "-- choose --") {
      setIsTextInfoPressed(false);
    }
  }, [selectedDropdown]);

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
          {/* 
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        ></m.div> */}

          {dataFromChild === "All Genes" && (
            <div className="DEG-box">
              <Dropdown
                className={DEGdropdownLength}
                selectedDropdown={selectedDropdown}
                onChange={(e) => setSelectedDropdown(e.target.value)}
                options={dropdownOptions}
              />
              {selectedDropdown === "-- choose --" && (
                <div style={{ width: 30, height: 30, margin: 10 }}></div>
              )}
              {selectedDropdown === "DHS_DOHHvsWT_EC" && (
                <>
                  <PlotlyGraph
                    file={"DHS_DOHHvsWT_EC/DHS_DOHHvsWT_EC.DEG.all"}
                  />
                </>
              )}
              {selectedDropdown === "DHS_DOHHvsTar4_EC" && (
                <>
                  <PlotlyGraph
                    file={"DHS_DOHHvsTar4_EC/DHS_DOHHvsTar4_EC.DEG.all"}
                  />
                </>
              )}
              <ExpandingComponentButton
                onClick={handleTextInfoClick}
                buttonText="View All"
              />
              {isTextInfoPressed ? <ViewAllPlotsComponent /> : <DownArrow />}
            </div>
          )}
        </>
      </div>
    </>
  );
}

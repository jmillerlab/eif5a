import "./deglistdatasets.css";
import React, { useState, useEffect } from "react";
import VolcanoPlots from "./VolcanoPlots";
import DEGListVisButton from "./DEGListVisButton";
import DataDescription from "./DataDescription";
import PlotlyGraph from "../../graphs/PlotlyGraph";
import Dropdown from "./DropDown";

export default function DEGListDatasets() {
  {
    /* */
  }

  const [selected, setSelected] = useState("DHS_DOHHvsWT_EC");
  const [isTextInfoPressed, setIsTextInfoPressed] = useState(false);

  const handleTextInfoClick = () => {
    setIsTextInfoPressed((prevIsTextInfoPressed) => !prevIsTextInfoPressed);
  };
  const handleChange = (e) => {
    setSelected(e.target.value);
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

      <div>
        <div className={containerClassName}>
          {isTextInfoPressed ? (
            <>
              <div>
                <Dropdown
                  value={selected}
                  onChange={handleChange}
                  options={dropdownOptions}
                />
              </div>
              <div className="DEG-box">
                {selected == "DHS_DOHHvsWT_EC" ? (
                  <>
                    <div className="plot-spacing">
                      <p style={{ color: "black", textAlign: "center" }}>
                        DHS_DOHHvsWT_EC.DEG
                      </p>
                      <PlotlyGraph file={"DHS_DOHHvsWT_EC.DEG.all"} />
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
                {selected == "eIF5A_DDvsTar4_EC" ? (
                  <VolcanoPlots
                    title={selected}
                    link="https://app.powerbi.com/reportEmbed?reportId=a3adf32a-b497-46da-a7f1-5854cfec2064&autoAuth=true&ctid=e2304327-1af0-4dee-83fb-c1b2fd6db0bb"
                  />
                ) : (
                  ""
                )}
                {selected == "eIF5A_DDvsWT_EC" ? (
                  <VolcanoPlots
                    title={selected}
                    link="https://app.powerbi.com/reportEmbed?reportId=33fc670c-2686-4982-b249-b9cfe2601cb2&autoAuth=true&ctid=e2304327-1af0-4dee-83fb-c1b2fd6db0bb"
                  />
                ) : (
                  ""
                )}
                {selected == "eIF5AvsWT_EC" ? (
                  <VolcanoPlots
                    title={selected}
                    link="https://app.powerbi.com/reportEmbed?reportId=3ebe8ec5-d4cb-4e67-aa7a-00b030772246&autoAuth=true&ctid=e2304327-1af0-4dee-83fb-c1b2fd6db0bb"
                  />
                ) : (
                  ""
                )}
                {selected == "Tar4_ECvsWT_EC" ? (
                  <VolcanoPlots
                    title={selected}
                    link="https://app.powerbi.com/reportEmbed?reportId=c4200bed-dc16-4869-b0e6-f8d05f6d4284&autoAuth=true&ctid=e2304327-1af0-4dee-83fb-c1b2fd6db0bb"
                  />
                ) : (
                  ""
                )}
              </div>
            </>
          ) : (
            <div className="down-arrow">&#5167;</div>
          )}
        </div>
      </div>
    </>
  );
}

import "./VisualizeBody.css";
import React, { useState, useEffect } from "react";
import VolcanoPlots from "./VolcanoPlots";
import TextInfo from "./TextInfo";

export default function VisualizeBody() {
  const [selected, setSelected] = useState("DHS_DOHHvsWT_EC");
  const [isTextInfoPressed, setIsTextInfoPressed] = useState(false);

  const handleTextInfoClick = () => {
    setIsTextInfoPressed((prevIsTextInfoPressed) => !prevIsTextInfoPressed);
  };
  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="body-container">
      <TextInfo onClick={handleTextInfoClick} />
      {isTextInfoPressed ? (
        <>
          <div>
            <select
              className="drop-down"
              value={selected}
              onChange={(e) => handleChange(e)}
            >
              <option className="option">DHS_DOHHvsWT_EC</option>
              <option className="option">eIF5A_DDvsTar4_EC</option>
              <option className="option">eIF5A_DDvsWT_EC</option>
              <option className="option">eIF5AvsWT_EC</option>
              <option className="option">Tar4_ECvsWT_EC</option>
            </select>
          </div>
          <div className="body-box">
            {selected == "DHS_DOHHvsWT_EC" ? (
              <div>
                <VolcanoPlots
                  title={selected}
                  link="https://app.powerbi.com/reportEmbed?reportId=87639f6e-a92d-48e8-9fe7-8d015da61be9&autoAuth=true&ctid=e2304327-1af0-4dee-83fb-c1b2fd6db0bb"
                />
              </div>
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
      ) : null}
    </div>
  );
}
{
  /*<div className="visualize-instructions">
          <div className="drop-down-container">
            <select
              className="drop-down"
              value={selected}
              onChange={(e) => handleChange(e)}
            >
              <option className="option">DHS_DOHHvsWT_EC</option>
              <option className="option">eIF5A_DDvsTar4_EC</option>
              <option className="option">eIF5A_DDvsWT_EC</option>
              <option className="option">eIF5AvsWT_EC</option>
              <option className="option">Tar4_ECvsWT_EC</option>
            </select>
            {selected == "DHS_DOHHvsWT_EC" ? (
              <VolcanoPlots
                title={selected}
                link="https://app.powerbi.com/reportEmbed?reportId=b25e412a-61c1-4a4f-b00e-5a48989b7f04&autoAuth=true&ctid=e2304327-1af0-4dee-83fb-c1b2fd6db0bb"
                width={windowSize.width - 50}
                height={windowSize.height - 100}
              />
            ) : (
              ""
            )}
            {selected == "eIF5A_DDvsTar4_EC" ? (
              <VolcanoPlots
                title={selected}
                link="https://app.powerbi.com/reportEmbed?reportId=a2f98477-f01e-4e39-8436-1228c657c9f9&autoAuth=true&ctid=e2304327-1af0-4dee-83fb-c1b2fd6db0bb"
              />
            ) : (
              ""
            )}
            {selected == "eIF5A_DDvsWT_EC" ? (
              <VolcanoPlots
                title={selected}
                link="https://app.powerbi.com/reportEmbed?reportId=195273de-ae57-479c-8a2c-edbe519cc129&autoAuth=true&ctid=e2304327-1af0-4dee-83fb-c1b2fd6db0bb"
              />
            ) : (
              ""
            )}
            {selected == "eIF5AvsWT_EC" ? (
              <VolcanoPlots
                title={selected}
                link="https://app.powerbi.com/reportEmbed?reportId=0c03e07a-4078-4ff2-8424-e89777064ea1&autoAuth=true&ctid=e2304327-1af0-4dee-83fb-c1b2fd6db0bb"
              />
            ) : (
              ""
            )}
            {selected == "Tar4_ECvsWT_EC" ? (
              <VolcanoPlots
                title={selected}
                link="https://app.powerbi.com/reportEmbed?reportId=c3fa5619-f58a-4cf1-b915-e775ab0a5fb6&autoAuth=true&ctid=e2304327-1af0-4dee-83fb-c1b2fd6db0bb"
              />
            ) : (
              ""
            )}
          </div>
        </div> */
}

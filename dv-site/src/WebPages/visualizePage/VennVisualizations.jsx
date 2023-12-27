import "./vennvisualizations.css";
import React, { useState, useEffect } from "react";
import VennVisButton from "./VennVisButton";
import VennDiagram from "./VennDiagrams";

export default function VennVisualizations() {
  {
    /* */
  }

  const [selected, setSelected] = useState("eIF5AvsTar4_EC_eIF5A_DDvsTar4_EC");
  const [isTextInfoPressed, setIsTextInfoPressed] = useState(false);

  const handleTextInfoClick = () => {
    setIsTextInfoPressed((prevIsTextInfoPressed) => !prevIsTextInfoPressed);
  };
  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const containerClassName = isTextInfoPressed
    ? "Venn-container-expanded"
    : "Venn-container";

  return (
    <div className={containerClassName}>
      <VennVisButton onClick={handleTextInfoClick} />
      {isTextInfoPressed ? (
        <>
          <div>
            <select
              className="venn-drop-down"
              value={selected}
              onChange={(e) => handleChange(e)}
            >
              <option className="option">
                eIF5AvsTar4_EC_eIF5A_DDvsTar4_EC
              </option>
              <option className="option"></option>
            </select>
          </div>
          <div className="Venn-box">
            {selected == "eIF5AvsTar4_EC_eIF5A_DDvsTar4_EC" ? (
              <div>
                <VennDiagram />
              </div>
            ) : (
              ""
            )}
          </div>
        </>
      ) : null}
    </div>
  );
}

import "./vennvisualizations.css";
import React, { useState, useEffect } from "react";
import VennVisButton from "./VennVisButton";
import Dropdown from "../DropDown";
import DownArrow from "../DownArrow";
import VennDiagram from "../../../graphs/vennDiagrams/VennDiagram";

export default function DEGListDatasets() {
  const [selected, setSelected] = useState("DHS_DOHHvsWT_EC");
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

  const dropdownOptions = [
    "DHS_DOHHvsWT_EC",
    "eIF5A_DDvsTar4_EC",
    "eIF5A_DDvsWT_EC",
    "eIF5AvsWT_EC",
    "Tar4_ECvsWT_EC",
  ];
  return (
    <>
      <VennVisButton onClick={handleTextInfoClick} />

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
            <div className="Venn-box">
              {selected == "DHS_DOHHvsWT_EC" ? (
                <>
                  <div className="plot-container">
                    <div className="plot-spacing">
                      <p style={{ color: "black", textAlign: "center" }}>
                        DHS_DOHHvsWT_EC.DEG
                      </p>
                      <VennDiagram />{" "}
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
              {selected == "eIF5A_DDvsTar4_EC" ? (
                <div>eIF5A_DDvsTar4_EC</div>
              ) : (
                ""
              )}
              {selected == "eIF5A_DDvsWT_EC" ? <div>eIF5A_DDvsWT_EC</div> : ""}
              {selected == "eIF5AvsWT_EC" ? <div>eIF5AvsWT_EC</div> : ""}
              {selected == "Tar4_ECvsWT_EC" ? <div>Tar4_ECvsWT_EC</div> : ""}
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

// export default function VennVisualizations() {
//   {
//     /* */
//   }

//   const [selected, setSelected] = useState("eIF5AvsTar4_EC_eIF5A_DDvsTar4_EC");
//   const [isTextInfoPressed, setIsTextInfoPressed] = useState(false);

//   const handleTextInfoClick = () => {
//     setIsTextInfoPressed((prevIsTextInfoPressed) => !prevIsTextInfoPressed);
//   };
//   const handleChange = (e) => {
//     setSelected(e.target.value);
//   };

//   const containerClassName = isTextInfoPressed
//     ? "Venn-container-expanded"
//     : "Venn-container";

//   return (
//     <div className={containerClassName}>
//       <VennVisButton onClick={handleTextInfoClick} />
//       {isTextInfoPressed ? (
//         <>
//           <div>
//             <select
//               className="venn-drop-down"
//               value={selected}
//               onChange={(e) => handleChange(e)}
//             >
//               <option className="option">
//                 eIF5AvsTar4_EC_eIF5A_DDvsTar4_EC
//               </option>
//               <option className="option"></option>
//             </select>
//           </div>
//           <div className="Venn-box">
//             {selected == "eIF5AvsTar4_EC_eIF5A_DDvsTar4_EC" ? (
//               <div>
//                 <VennDiagram />
//               </div>
//             ) : (
//               ""
//             )}
//           </div>
//         </>
//       ) : null}
//     </div>
//   );
// }

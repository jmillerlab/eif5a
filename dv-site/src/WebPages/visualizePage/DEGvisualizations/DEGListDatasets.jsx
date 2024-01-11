// import "./deglistdatasets.css";
// import React, { useState, useEffect } from "react";
// import DEGListVisButton from "./DEGListVisButton";
// import PlotlyGraph from "../../../graphs/PlotlyGraph";
// import Dropdown from "../DropDown";
// import DownArrow from "../DownArrow";
// // import Toggle from "../ToggleComponent";

// export default function DEGListDatasets() {
//   const [selectedDropdown, setSelectedDropdown] = useState("DHS_DOHHvsWT_EC");
//   const [isTextInfoPressed, setIsTextInfoPressed] = useState(false);
//   const [plotType, setPlotType] = useState(false);

//   const handleTextInfoClick = () => {
//     setIsTextInfoPressed((prevIsTextInfoPressed) => !prevIsTextInfoPressed);
//   };
//   const handleChange = (e) => {
//     setSelectedDropdown(e.target.value);
//   };

//   const containerClassName = isTextInfoPressed
//     ? "DEG-container-expanded"
//     : "DEG-container";

//   const dropdownOptions = [
//     "DHS_DOHHvsWT_EC",
//     "eIF5A_DDvsTar4_EC",
//     "eIF5A_DDvsWT_EC",
//     "eIF5AvsWT_EC",
//     "Tar4_ECvsWT_EC",
//   ];
//   return (
//     <>
//       <DEGListVisButton onClick={handleTextInfoClick} />

//       <div className={containerClassName}>
//         {isTextInfoPressed ? (
//           <>
//             <div>
//               <Dropdown
//                 value={selectedDropdown}
//                 onChange={handleChange}
//                 options={dropdownOptions}
//               />
//             </div>
//             <div className="DEG-box">
//               {selectedDropdown == "DHS_DOHHvsWT_EC" ? (
//                 <>
//                   {/* <Toggle /> */}
//                   <div className="plot-container">
//                     <div className="plot-spacing">
//                       <p
//                         style={{
//                           color: "black",
//                           textAlign: "center",
//                           marginTop: "60px",
//                         }}
//                       >
//                         DHS_DOHHvsWT_EC.DEG
//                       </p>
//                       {/* <PlotlyGraph
//                         file={
//                           "DHS_DOHHvsWT_EC.DEG.all_with_zero_fold_change_threshold"
//                         }
//                       /> */}
//                       <PlotlyGraph file={"DHS_DOHHvsWT_EC.DEG.all"} />
//                     </div>
//                   </div>
//                   <div className="plot-spacing">
//                     <p
//                       style={{
//                         color: "black",
//                         textAlign: "center",
//                         marginTop: "60px",
//                       }}
//                     >
//                       DHS_DOHHvsWT_EC.cancer
//                     </p>
//                     <PlotlyGraph file={"DHS_DOHHvsWT_EC.all.cancer"} />
//                   </div>
//                 </>
//               ) : (
//                 ""
//               )}
//               {selectedDropdown == "eIF5A_DDvsTar4_EC" ? (
//                 <div>eIF5A_DDvsTar4_EC</div>
//               ) : (
//                 ""
//               )}
//               {selectedDropdown == "eIF5A_DDvsWT_EC" ? (
//                 <div>eIF5A_DDvsWT_EC</div>
//               ) : (
//                 ""
//               )}
//               {selectedDropdown == "eIF5AvsWT_EC" ? (
//                 <div>eIF5AvsWT_EC</div>
//               ) : (
//                 ""
//               )}
//               {selectedDropdown == "Tar4_ECvsWT_EC" ? (
//                 <div>Tar4_ECvsWT_EC</div>
//               ) : (
//                 ""
//               )}
//             </div>
//           </>
//         ) : (
//           // <div className="down-arrow">&#5167;</div>
//           // <div className="scroll-down"></div>
//           <DownArrow />
//         )}
//       </div>
//     </>
//   );
// }
import "./deglistdatasets.css";
import React, { useState, useEffect } from "react";
import DEGListVisButton from "./DEGListVisButton";
import PlotlyGraph from "../../../graphs/PlotlyGraph";
import Dropdown from "../DropDown";
import DownArrow from "../DownArrow";
import ToggleSwitch from "../ToggleComponent";

export default function DEGListDatasets() {
  const [selectedDropdown, setSelectedDropdown] = useState("DHS_DOHHvsWT_EC");
  const [isTextInfoPressed, setIsTextInfoPressed] = useState(false);
  const [toggleState, setToggleState] = useState(false);

  const handleTextInfoClick = () => {
    setIsTextInfoPressed((prevIsTextInfoPressed) => !prevIsTextInfoPressed);
    setToggleState(false);
  };

  const handleToggle = () => {
    setToggleState((prevToggleState) => !prevToggleState);
  };

  const DEGdropdownLength = "drop-down";

  const containerClassName = isTextInfoPressed
    ? "DEG-container-expanded"
    : "DEG-container";

  const dropdownOptions = [
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
      <DEGListVisButton
        pressedState={isTextInfoPressed}
        onPress={handleTextInfoClick}
      />

      <div className={containerClassName}>
        {isTextInfoPressed ? (
          <>
            <div>
              <Dropdown
                className={DEGdropdownLength}
                value={selectedDropdown}
                onChange={(e) => setSelectedDropdown(e.target.value)}
                options={dropdownOptions}
              />
            </div>
            <div className="DEG-box">
              {selectedDropdown === "DHS_DOHHvsWT_EC" && (
                <>
                  <ToggleSwitch
                    toggleState={toggleState}
                    onToggle={handleToggle}
                  />
                  <div className="plot-container">
                    <div className="plot-spacing">
                      <PlotlyGraph
                        file={
                          toggleState
                            ? "DHS_DOHHvsWT_EC/DHS_DOHHvsWT_EC.DEG.all"
                            : "DHS_DOHHvsWT_EC/DHS_DOHHvsWT_EC.all.cancer"
                        }
                      />
                    </div>
                  </div>
                </>
              )}
              {selectedDropdown === "DHS_DOHHvsTar4_EC" && (
                <>
                  <ToggleSwitch
                    toggleState={toggleState}
                    onToggle={handleToggle}
                  />
                  <div className="plot-container">
                    <div className="plot-spacing">
                      <PlotlyGraph
                        file={
                          toggleState
                            ? "DHS_DOHHvsTar4_EC/DHS_DOHHvsTar4_EC.DEG.all"
                            : "DHS_DOHHvsTar4_EC/DHS_DOHHvsTar4_EC.all.cancer"
                        }
                      />
                    </div>
                  </div>
                </>
              )}
              {selectedDropdown === "eIF5A_DDvsDHS_DOHH" && (
                <>
                  <ToggleSwitch
                    toggleState={toggleState}
                    onToggle={handleToggle}
                  />
                  <div className="plot-container">
                    <div className="plot-spacing">
                      <PlotlyGraph
                        file={
                          toggleState
                            ? "eIF5A_DDvsDHS_DOHH/eIF5A_DDvsDHS_DOHH.DEG.all"
                            : "eIF5A_DDvsDHS_DOHH/eIF5A_DDvsDHS_DOHH.all.cancer"
                        }
                      />
                    </div>
                  </div>
                </>
              )}
              {selectedDropdown === "eIF5A_DDvseIF5A" && (
                <>
                  <ToggleSwitch
                    toggleState={toggleState}
                    onToggle={handleToggle}
                  />
                  <div className="plot-container">
                    <div className="plot-spacing">
                      <PlotlyGraph
                        file={
                          toggleState
                            ? "eIF5A_DDvseIF5A/eIF5A_DDvseIF5A.DEG.all"
                            : "eIF5A_DDvseIF5A/eIF5A_DDvseIF5A.all.cancer"
                        }
                      />
                    </div>
                  </div>
                </>
              )}
              {selectedDropdown === "eIF5A_DDvsK50A_DD" && (
                <>
                  <ToggleSwitch
                    toggleState={toggleState}
                    onToggle={handleToggle}
                  />
                  <div className="plot-container">
                    <div className="plot-spacing">
                      <PlotlyGraph
                        file={
                          toggleState
                            ? "eIF5A_DDvsK50A_DD/eIF5A_DDvsK50A_DD.DEG.all"
                            : "eIF5A_DDvsK50A_DD/eIF5A_DDvsK50A_DD.all.cancer"
                        }
                      />
                    </div>
                  </div>
                </>
              )}
              {selectedDropdown === "eIF5A_DDvsTar4_EC" && (
                <>
                  <ToggleSwitch
                    toggleState={toggleState}
                    onToggle={handleToggle}
                  />
                  <div className="plot-container">
                    <div className="plot-spacing">
                      <PlotlyGraph
                        file={
                          toggleState
                            ? "eIF5A_DDvsTar4_EC/eIF5A_DDvsTar4_EC.DEG.all"
                            : "eIF5A_DDvsTar4_EC/eIF5A_DDvsTar4_EC.all.cancer"
                        }
                      />
                    </div>
                  </div>
                </>
              )}
              {selectedDropdown === "eIF5A_DDvsWT_EC" && (
                <>
                  <ToggleSwitch
                    toggleState={toggleState}
                    onToggle={handleToggle}
                  />
                  <div className="plot-container">
                    <div className="plot-spacing">
                      <PlotlyGraph
                        file={
                          toggleState
                            ? "eIF5A_DDvsWT_EC/eIF5A_DDvsWT_EC.DEG.all"
                            : "eIF5A_DDvsWT_EC/eIF5A_DDvsWT_EC.all.cancer"
                        }
                      />
                    </div>
                  </div>
                </>
              )}
              {selectedDropdown === "eIF5AvsTar4_EC" && (
                <>
                  <ToggleSwitch
                    toggleState={toggleState}
                    onToggle={handleToggle}
                  />
                  <div className="plot-container">
                    <div className="plot-spacing">
                      <PlotlyGraph
                        file={
                          toggleState
                            ? "eIF5AvsTar4_EC/eIF5AvsTar4_EC.DEG.all"
                            : "eIF5AvsTar4_EC/eIF5AvsTar4_EC.all.cancer"
                        }
                      />
                    </div>
                  </div>
                </>
              )}
              {selectedDropdown === "eIF5AvsWT_EC" && (
                <>
                  <ToggleSwitch
                    toggleState={toggleState}
                    onToggle={handleToggle}
                  />
                  <div className="plot-container">
                    <div className="plot-spacing">
                      <PlotlyGraph
                        file={
                          toggleState
                            ? "eIF5AvsWT_EC/eIF5AvsWT_EC.DEG.all"
                            : "eIF5AvsWT_EC/eIF5AvsWT_EC.all.cancer"
                        }
                      />
                    </div>
                  </div>
                </>
              )}
              {selectedDropdown === "K50A_DDvsDHS_DOHH" && (
                <>
                  <ToggleSwitch
                    toggleState={toggleState}
                    onToggle={handleToggle}
                  />
                  <div className="plot-container">
                    <div className="plot-spacing">
                      <PlotlyGraph
                        file={
                          toggleState
                            ? "K50A_DDvsDHS_DOHH/K50A_DDvsDHS_DOHH.DEG.all"
                            : "K50A_DDvsDHS_DOHH/K50A_DDvsDHS_DOHH.all.cancer"
                        }
                      />
                    </div>
                  </div>
                </>
              )}
              {selectedDropdown === "K50A_DDvsTar4_EC" && (
                <>
                  <ToggleSwitch
                    toggleState={toggleState}
                    onToggle={handleToggle}
                  />
                  <div className="plot-container">
                    <div className="plot-spacing">
                      <PlotlyGraph
                        file={
                          toggleState
                            ? "K50A_DDvsTar4_EC/K50A_DDvsTar4_EC.DEG.all"
                            : "K50A_DDvsTar4_EC/K50A_DDvsTar4_EC.all.cancer"
                        }
                      />
                    </div>
                  </div>
                </>
              )}
              {selectedDropdown === "K50A_DDvsWT_EC" && (
                <>
                  <ToggleSwitch
                    toggleState={toggleState}
                    onToggle={handleToggle}
                  />
                  <div className="plot-container">
                    <div className="plot-spacing">
                      <PlotlyGraph
                        file={
                          toggleState
                            ? "K50A_DDvsWT_EC/K50A_DDvsWT_EC.DEG.all"
                            : "K50A_DDvsWT_EC/K50A_DDvsWT_EC.all.cancer"
                        }
                      />
                    </div>
                  </div>
                </>
              )}
              {selectedDropdown === "Tar4_ECvsWT_EC" && (
                <>
                  <ToggleSwitch
                    toggleState={toggleState}
                    onToggle={handleToggle}
                  />
                  <div className="plot-container">
                    <div className="plot-spacing">
                      <PlotlyGraph
                        file={
                          toggleState
                            ? "Tar4_ECvsWT_EC/Tar4_ECvsWT_EC.DEG.all"
                            : "Tar4_ECvsWT_EC/Tar4_ECvsWT_EC.all.cancer"
                        }
                      />
                    </div>
                  </div>
                </>
              )}
              {/* Add similar blocks for other dropdown options */}
            </div>
          </>
        ) : (
          <DownArrow />
        )}
      </div>
    </>
  );
}

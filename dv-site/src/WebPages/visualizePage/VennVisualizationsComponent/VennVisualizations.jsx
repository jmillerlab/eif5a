import "./vennvisualizations.css";
import React, { useState, useEffect } from "react";
import VisualizeButton from "../../../visualizeComponents/Button";
import Dropdown from "../../../visualizeComponents/DropDown";
import DownArrow from "../../../visualizeComponents/DownArrow";
import VennDiagram3 from "../../../graphs/vennDiagrams/VennDiagram3";
import VennDiagram2 from "../../../graphs/vennDiagrams/VennDiagram2";
// import VennDiagram4 from "../../../graphs/vennDiagrams/VennDiagram4";

export default function DEGListDatasets() {
  const [selected, setSelected] = useState(
    "eIF5AvsTar4_EC_DHS_DOHHvsTar4_EC_eIF5A_DDvsTar4_EC"
  );
  const [isTextInfoPressed, setIsTextInfoPressed] = useState(false);

  const handleTextInfoClick = () => {
    setIsTextInfoPressed((prevIsTextInfoPressed) => !prevIsTextInfoPressed);
  };
  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const eIF5A_DDvsTar4_EC_DHS_DOHHvsTar4_EC = [
    {
      sets: ["eIF5A_DDvsTar4_EC"],
      displayName: "eIF5A_DDvsTar4_EC",
      name: "2310",
      value: 120,
      displayValue: 2310,
    },
    {
      sets: ["DHS_DOHHvsTar4_EC"],
      displayName: "DHS_DOHHvsTar4_EC",
      name: "2057",
      value: 120,
      displayValue: 2057,
    },

    {
      sets: ["eIF5A_DDvsTar4_EC", "DHS_DOHHvsTar4_EC"],
      displayName: "eIF5A_DDvsTar4_EC and DHS_DOHHvsTar4_EC",
      name: "2353",
      value: 40,
      displayValue: 2353,
    },
  ];

  const eIF5A_DDvsTar4_EC_K50A_DDvsTar4_EC = [
    {
      sets: ["eIF5A_DDvsTar4_EC"],
      displayName: "eIF5A_DDvsTar4_EC",
      name: "4484",
      value: 120,
      displayValue: 4484,
    },
    {
      sets: ["K50A_DDvsTar4_EC"],
      displayName: "K50A_DDvsTar4_EC",
      name: "708",
      value: 120,
      displayValue: 708,
    },

    {
      sets: ["eIF5A_DDvsTar4_EC", "K50A_DDvsTar4_EC"],
      displayName: "eIF5A_DDvsTar4_EC and K50A_DDvsTar4_EC",
      name: "179",
      value: 40,
      displayValue: 179,
    },
  ];

  const eIF5AvsTar4_EC_DHS_DOHHvsTar4_EC = [
    {
      sets: ["eIF5AvsTar4_EC"],
      displayName: "eIF5AvsTar4_EC",
      name: "423",
      value: 120,
      displayValue: 423,
    },
    {
      sets: ["DHS_DOHHvsTar4_EC"],
      displayName: "DHS_DOHHvsTar4_EC",
      name: "4276",
      value: 120,
      displayValue: 4276,
    },

    {
      sets: ["eIF5AvsTar4_EC", "DHS_DOHHvsTar4_EC"],
      displayName: "eIF5AvsTar4_EC and DHS_DOHHvsTar4_EC",
      name: "134",
      value: 40,
      displayValue: 134,
    },
  ];

  const eIF5AvsTar4_EC_eIF5A_DDvsTar4_EC = [
    {
      sets: ["eIF5AvsTar4_EC"],
      displayName: "eIF5AvsTar4_EC",
      name: "444",
      value: 120,
      displayValue: 444,
    },
    {
      sets: ["eIF5A_DDvsTar4_EC"],
      displayName: "eIF5A_DDvsTar4_EC",
      name: "4550",
      value: 120,
      displayValue: 4550,
    },

    {
      sets: ["eIF5AvsTar4_EC", "eIF5A_DDvsTar4_EC"],
      displayName: "eIF5AvsTar4_EC and eIF5A_DDvsTar4_EC",
      name: "113",
      value: 40,
      displayValue: 113,
    },
  ];

  const eIF5AvsTar4_EC_K50A_DDvsTar4_EC = [
    {
      sets: ["eIF5AvsTar4_EC"],
      displayName: "eIF5AvsTar4_EC",
      name: "403",
      value: 120,
      displayValue: 403,
    },
    {
      sets: ["K50A_DDvsTar4_EC"],
      displayName: "K50A_DDvsTar4_EC",
      name: "733",
      value: 120,
      displayValue: 733,
    },

    {
      sets: ["eIF5AvsTar4_EC", "K50A_DDvsTar4_EC"],
      displayName: "eIF5AvsTar4_EC and K50A_DDvsTar4_EC",
      name: "154",
      value: 40,
      displayValue: 154,
    },
  ];

  const K50A_DDvsTar4_EC_DHS_DOHHvsTar4_EC = [
    {
      sets: ["K50A_DDvsTar4_EC"],
      displayName: "K50A_DDvsTar4_EC",
      name: "736",
      value: 120,
      displayValue: 736,
    },
    {
      sets: ["DHS_DOHHvsTar4_EC"],
      displayName: "DHS_DOHHvsTar4_EC",
      name: "4259",
      value: 120,
      displayValue: 4259,
    },

    {
      sets: ["DHS_DOHHvsTar4_EC", "K50A_DDvsTar4_EC"],
      displayName: "DHS_DOHHvsTar4_EC and K50A_DDvsTar4_EC",
      name: "151",
      value: 40,
      displayValue: 151,
    },
  ];

  const vennDropDownLength = "Venn-dropdown-length";

  const containerClassName = isTextInfoPressed
    ? "Venn-container-expanded"
    : "Venn-container";

  const dropdownOptions = [
    "eIF5AvsTar4_EC_DHS_DOHHvsTar4_EC_eIF5A_DDvsTar4_EC",
    "eIF5A_DDvsTar4_EC_DHS_DOHHvsTar4_EC",
    "eIF5A_DDvsTar4_EC_K50A_DDvsTar4_EC",
    "eIF5AvsTar4_EC_DHS_DOHHvsTar4_EC",
    "eIF5AvsTar4_EC_eIF5A_DDvsTar4_EC",
    "eIF5AvsTar4_EC_K50A_DDvsTar4_EC",
    "K50A_DDvsTar4_EC_DHS_DOHHvsTar4_EC",
  ];
  return (
    <>
      <VisualizeButton
        onClick={handleTextInfoClick}
        buttonText="Visualize as Venn"
      />

      <div className={containerClassName}>
        {isTextInfoPressed ? (
          <>
            <div>
              <Dropdown
                className={vennDropDownLength}
                value={selected}
                onChange={handleChange}
                options={dropdownOptions}
              />
            </div>
            <div className="Venn-box">
              {selected ==
              "eIF5AvsTar4_EC_DHS_DOHHvsTar4_EC_eIF5A_DDvsTar4_EC" ? (
                <>
                  <div className="plot-container">
                    <div className="plot-spacing">
                      <p
                        style={{
                          color: "black",
                          textAlign: "center",
                          marginBottom: "30px",
                        }}
                      >
                        Gene_ID Comparison <br />
                        {selected}
                      </p>
                      <VennDiagram3 />
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
              {selected == "eIF5A_DDvsTar4_EC_DHS_DOHHvsTar4_EC" ? (
                <>
                  <div className="plot-container">
                    <div className="plot-spacing">
                      <p
                        style={{
                          color: "black",
                          textAlign: "center",
                          marginBottom: "30px",
                        }}
                      >
                        Gene_ID Comparison <br />
                        {selected}
                      </p>
                      <VennDiagram2
                        data={eIF5A_DDvsTar4_EC_DHS_DOHHvsTar4_EC}
                      />
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
              {selected == "eIF5A_DDvsTar4_EC_K50A_DDvsTar4_EC" ? (
                <>
                  <div className="plot-container">
                    <div className="plot-spacing">
                      <p
                        style={{
                          color: "black",
                          textAlign: "center",
                          marginBottom: "30px",
                        }}
                      >
                        Gene_ID Comparison <br />
                        {selected}
                      </p>
                      <VennDiagram2 data={eIF5A_DDvsTar4_EC_K50A_DDvsTar4_EC} />
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
              {selected == "eIF5AvsTar4_EC_DHS_DOHHvsTar4_EC" ? (
                <>
                  <div className="plot-container">
                    <div className="plot-spacing">
                      <p
                        style={{
                          color: "black",
                          textAlign: "center",
                          marginBottom: "30px",
                        }}
                      >
                        Gene_ID Comparison <br />
                        {selected}
                      </p>
                      <VennDiagram2 data={eIF5AvsTar4_EC_DHS_DOHHvsTar4_EC} />
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
              {selected == "eIF5AvsTar4_EC_eIF5A_DDvsTar4_EC" ? (
                <>
                  <div className="plot-container">
                    <div className="plot-spacing">
                      <p
                        style={{
                          color: "black",
                          textAlign: "center",
                          marginBottom: "30px",
                        }}
                      >
                        Gene_ID Comparison <br />
                        {selected}
                      </p>
                      <VennDiagram2 data={eIF5AvsTar4_EC_eIF5A_DDvsTar4_EC} />
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
              {selected == "eIF5AvsTar4_EC_K50A_DDvsTar4_EC" ? (
                <>
                  <div className="plot-container">
                    <div className="plot-spacing">
                      <p
                        style={{
                          color: "black",
                          textAlign: "center",
                          marginBottom: "30px",
                        }}
                      >
                        Gene_ID Comparison <br />
                        {selected}
                      </p>
                      <VennDiagram2 data={eIF5AvsTar4_EC_K50A_DDvsTar4_EC} />
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
              {selected == "K50A_DDvsTar4_EC_DHS_DOHHvsTar4_EC" ? (
                <>
                  <div className="plot-container">
                    <div className="plot-spacing">
                      <p
                        style={{
                          color: "black",
                          textAlign: "center",
                          marginBottom: "30px",
                        }}
                      >
                        Gene_ID Comparison <br />
                        {selected}
                      </p>
                      <VennDiagram2 data={K50A_DDvsTar4_EC_DHS_DOHHvsTar4_EC} />
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </>
        ) : (
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

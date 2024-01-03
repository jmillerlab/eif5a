import React from "react";
import scalableImage from "../../../assets/eIF5AvsTar4_EC_eIF5A_DDvsTar4_EC.png"; // Import your image file

export default function VennDiagram() {
  return (
    <div>
      <img
        src={scalableImage}
        alt="Scalable Image"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}

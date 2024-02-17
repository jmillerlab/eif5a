import "./DEGListDatasets.css";
import PlotlyGraph from "../../graphs/PlotlyGraph";
import { motion as m } from "framer-motion";

export default function ViewAllPlotsComponent() {
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
    <div className="plots-grid">
      {dropdownOptions.map((option, index) => (
        <div key={index} className="plot-item">
          <PlotlyGraph file={`${option}/${option}.DEG.all`} />
        </div>
      ))}
    </div>
  );
}

import "./DEGListDatasets.css";
import PlotlyGraph from "../../graphs/PlotlyGraph";
import { motion as m } from "framer-motion";

export default function ViewAllPlotsComponent() {
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

  /*
  .DEG-container-expanded {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: auto;
  background-color: rgb(255, 255, 255);
  transition: height 0.5s;
   height: 60vw; 
   max-height: 50vw; 
   min-height: 700px; 
  transition: 0.6s;
}
  */

  return (
    <div>
      {/* <PlotlyGraph file={"DHS_DOHHvsTar4_EC/DHS_DOHHvsTar4_EC.DEG.all"} />
      <PlotlyGraph file={"eIF5A_DDvsDHS_DOHH/eIF5A_DDvsDHS_DOHH.DEG.all"} />
      <PlotlyGraph file={"eIF5A_DDvseIF5A/eIF5A_DDvseIF5A.DEG.all"} />
      <PlotlyGraph file={"eIF5A_DDvsK50A_DD/eIF5A_DDvsK50A_DD.DEG.all"} />
      <PlotlyGraph file={"eIF5A_DDvsTar4_EC/eIF5A_DDvsTar4_EC.DEG.all"} />
      <PlotlyGraph file={"eIF5A_DDvsWT_EC/eIF5A_DDvsWT_EC.DEG.all"} /> */}
      <PlotlyGraph file={"eIF5AvsTar4_EC/eIF5AvsTar4_EC.DEG.all"} />
      <PlotlyGraph file={"eIF5AvsWT_EC/eIF5AvsWT_EC.DEG.all"} />
      <PlotlyGraph file={"K50A_DDvsDHS_DOHH/K50A_DDvsDHS_DOHH.DEG.all"} />
      <PlotlyGraph file={"K50A_DDvsTar4_EC/K50A_DDvsTar4_EC.DEG.all"} />
      <PlotlyGraph file={"K50A_DDvsWT_EC/K50A_DDvsWT_EC.DEG.all"} />
      <PlotlyGraph file={"Tar4_ECvsWT_EC/Tar4_ECvsWT_EC.DEG.all"} />
      <PlotlyGraph file={"DHS_DOHHvsWT_EC/DHS_DOHHvsWT_EC.DEG.all"} />
    </div>
  );
}

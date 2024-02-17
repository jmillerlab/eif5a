import "./VisualizeBody.css";

// import DEGListDatasets from "../WebPages/visualizePage/VolcanoVisualizationsSection/DEGListDatasets";
// import VennVisualizations from "../WebPages/visualizePage/VennVisualizationsSection/VennVisualizations";
import VolcanoSection from "./VolcanoVisualizationsSection/DEGListDatasets";
import VennSection from "./VennVisualizationsSection/VennVisualizations";
import DataDescription from "./DataDescription";
import VisualizationSection from "./VolcanoVisualizationsSection/VisualizationSection";
import { motion as m } from "framer-motion";

export default function VisualizeBody() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="volcano-background">
        <VisualizationSection />
        <DataDescription />
        {/* <VennSection />
        <DataDescription /> */}
      </div>
    </m.div>
  );
}

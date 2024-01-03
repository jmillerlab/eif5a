import VisualizeHero from "./VisualizeHero";
import VisualizeBody from "./VisualizeBody";
import VisualizeInformation from "./DEGvisualizations/DEGListVisButton";
import DEGListDatasets from "./DEGvisualizations/DEGListDatasets";
import VennVisualizations from "./VennVisualizations/VennVisualizations";
import DataDescription from "./DataDescription";

export default function Visualize() {
  return (
    <div>
      <VisualizeHero />
      {/* <VisualizeBody /> */}
      <DEGListDatasets />
      <DataDescription />
      <VennVisualizations />
      <DataDescription />
    </div>
  );
}

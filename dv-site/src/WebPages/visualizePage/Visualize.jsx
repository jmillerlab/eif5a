import VisualizeHero from "./VisualizeHero";
import VisualizeBody from "./VisualizeBody";
import VisualizeInformation from "./DEGListVisButton";
import DEGListDatasets from "./DEGListDatasets";
import VennVisualizations from "./VennVisualizations";
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

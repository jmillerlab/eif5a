import "./VisualizeBody.css";

import DEGListDatasets from "./DEGListDatasets";
import VennVisualizations from "./VennVisualizations";
import DataDescription from "./DataDescription";

export default function VisualizeBody() {
  return (
    <div>
      <DEGListDatasets />
      <DataDescription />
      <VennVisualizations />
      <DataDescription />
    </div>
  );
}

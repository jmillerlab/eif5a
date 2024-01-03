import "./VisualizeBody.css";

import DEGListDatasets from "./DEGvisualizations/DEGListDatasets";
import VennVisualizations from "./VennVisualizations/VennVisualizations";
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

import VisualizeHero from "../visualizeComponents/VisualizeHero";
import VisualizeBody from "../visualizeComponents/VisualizeBody";
import { motion as m } from "framer-motion";

export default function Visualize() {
  return (
    <m.div
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <VisualizeHero />
      <VisualizeBody />
      {/* 
      <VennVisualizations />
      <DataDescription /> */}
    </m.div>
  );
}

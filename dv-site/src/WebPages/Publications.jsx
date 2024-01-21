import "./Publications.css";
import { motion as m } from "framer-motion";

export default function Publications() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="background"
    >
      <div className="studies-container">
        <div className="studies-inner-container">
          <div className="studies-header">
            <h1>Publications Page</h1>
            <p>Under Construction</p>
          </div>
        </div>
      </div>
    </m.div>
  );
}

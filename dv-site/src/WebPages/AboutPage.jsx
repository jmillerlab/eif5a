import "./aboutPage.css";
import CustomDropDown from "../CustomDropDown";
import { motion as m } from "framer-motion";
// import Venn from "./visualizePage/VennDiagrams";
export default function About() {
  return (
    <div className="background">
      <div className="about-container">
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="about-inner-container"
        >
          <div className="about-header">
            <h1>Project Overview Page</h1>
            <p>Under Construction</p>
          </div>
        </m.div>
      </div>
    </div>
  );
}

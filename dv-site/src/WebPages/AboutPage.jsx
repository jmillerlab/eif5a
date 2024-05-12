import "./AboutPage.css";
import "../homeComponents/HomeDescription.css";
import CustomDropDown from "../CustomDropDown";
import { motion as m } from "framer-motion";
// import Venn from "./visualizePage/VennDiagrams";
export default function About() {
  const data = {
    nodes: [
      { id: "node1", label: "Node 1" },
      { id: "node2", label: "Node 2" },
      // Add more nodes as needed
    ],
    links: [
      { source: "node1", target: "node2" },
      // Add more links as needed
    ],
  };
  return (
    <>
      <div className="background">
        <div className="about-container">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="about-inner-container"
          >
            <div className="about-header">
              <h1>Contact</h1>
              {/* <h1>Project Overview Page</h1>
            <p>Under Construction</p> */}
            </div>
          </m.div>
        </div>
      </div>
      <div className="black-background">
        <div className="p2-container">
          <div className="p2-box">
            <h1 className="p2-large-font">Questions?</h1>
            <h3 className="p2-small-font">
              <ul>
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                ></m.div>
              </ul>
            </h3>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

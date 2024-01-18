import "./SelenicaLabButton.css";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

function SelenicaLabButton() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="box-3"
    >
      <div className="box-2">
        <div className="ring-3"></div>
        <div className="ring-2"></div>
        <div className="ring"></div>
        <div className="box-4">
          <Link to="/visualize" className="large-font">
            <a>The Role of eIF5A Hypusination​</a>
          </Link>
        </div>
      </div>
    </m.div>
  );
}

export default SelenicaLabButton;

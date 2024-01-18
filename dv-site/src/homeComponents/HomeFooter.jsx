import "./HomeFooter.css";
import icon from "./git-logo.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="footer-container">
      <div className="footer-box">
        <Link>
          <img
            src={icon}
            style={{
              width: 45,
              height: 45,
              backgroundColor: "gray",
              padding: 3,
              borderRadius: "50%",
              opacity: 0.6,
            }}
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;

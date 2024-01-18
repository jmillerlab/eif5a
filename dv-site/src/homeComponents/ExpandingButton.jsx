import "./ExpandingButton.css";
import { NavLink } from "react-router-dom";

function ExpandingButton(props) {
  return (
    <>
      <div href="" className="c1-box">
        <a target="_blank" rel="noopener noreferrer" href={props.link}>
          <div className="group-image">
            <img
              src={props.image}
              style={{ width: 120, height: 120, opacity: 0.7 }}
            ></img>
          </div>
          <div className="title-box">
            <h1
              className="hover-title"
              style={{
                fontSize: 17.9,
                fontStyle: "bold",
              }}
            >
              {props.tab}
            </h1>
          </div>
          <div className="lower-text">
            <p className="hover-text">{props.info}</p>
          </div>
        </a>
      </div>
    </>
  );
}

export default ExpandingButton;

import "./LeftContent.css";

export default function PhoneNumber(props) {
  return (
    <div className="phone-container">
      <div className="phone-content">
        <div className="icon">
          <img
            src={props.icon}
            style={{ width: 35, height: 35, padding: 7 }}
          ></img>
        </div>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

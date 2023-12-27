// Dropdown.js
import "./dropdown.css";

export default function Dropdown({ value, onChange, options }) {
  return (
    <select className="drop-down" value={value} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} className="option">
          {option}
        </option>
      ))}
    </select>
  );
}

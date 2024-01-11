// Dropdown.js
import "./dropdown.css";

export default function Dropdown({ value, onChange, options, className }) {
  return (
    <select className={className} value={value} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} className="option">
          {option}
        </option>
      ))}
    </select>
  );
}

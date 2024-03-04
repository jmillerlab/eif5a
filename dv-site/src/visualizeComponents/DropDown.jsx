// Dropdown.js
import "./DropDown.css";

export default function Dropdown({
  selectedDropdown,
  onChange,
  options,
  className,
}) {
  return (
    <div style={{ margin: 30 }}>
      <select
        className={className}
        value={selectedDropdown}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.graph} className="option">
            {option.graph}
          </option>
        ))}
      </select>
    </div>
  );
}

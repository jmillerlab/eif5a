// Dropdown.js
import "./dropdown.css";

export default function Dropdown({
  selectedDropdown,
  onChange,
  options,
  className,
}) {
  return (
    <select
      className={className}
      selectedDropdown={selectedDropdown}
      onChange={onChange}
    >
      {options.map((option, index) => (
        <option key={index} className="option">
          {option}
        </option>
      ))}
    </select>
  );
}

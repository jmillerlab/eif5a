import React, { useState } from "react";

export default function DropDown() {
  const [selected, setSelected] = useState("Option One");

  const handleChange = (e) => {
    console.log(e.target.value);
    setSelected(e.target.value);
  };

  return (
    <div>
      <select value={selected} onChange={(e) => handleChange(e)}>
        <option>Option One</option>
        <option>Option Two</option>
        <option>Option Three</option>
        <option>Option Four</option>
        <option>Option Five</option>
      </select>
    </div>
  );
}

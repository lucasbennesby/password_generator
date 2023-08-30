import React, { useState } from "react";
import "./LengthSelector.css";

function LengthSelector(props) {
  const [length, setlLength] = useState(0);

  const handleChange = (e) => {
    setlLength(e.target.value);

    const progress = (e.target.value / e.target.max) * 100;
    e.target.style.background = `linear-gradient(to right, #a4ffaf ${progress}%, #17161f ${progress}%)`;

    {
      props.onChange(e.target.value);
    }
  };

  return (
    <div className="length_wrapper">
      <div className="length_show">
        <p>Character Length</p>
        <h2 className="number_show">{length}</h2>
      </div>
      <input
        className="slider"
        defaultValue={length}
        onChange={handleChange}
        type="range"
        min="0"
        max="20"
      />
    </div>
  );
}

export default LengthSelector;

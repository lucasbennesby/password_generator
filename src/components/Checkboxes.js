import React, { useState } from "react";
import "./Checkboxes.css";

function Checkboxes(props) {
  const [check, setCheck] = useState("");
  const [checked, setChecked] = useState(0);

  const handleClick = (e) => {
    if (checked === 0) {
      setCheck("checked");
      setChecked(1);
      // props.onCheck(e.target.dataset.checked);
    } else {
      setCheck("");
      setChecked(0);
      // props.onCheck(e.target.dataset.checked);
    }
    props.onCheck(e.target);
  };

  return (
    <div className="checkboxes_wrapper">
      <label
        className="container"
        htmlFor={props.for}
      >
        <span
          onClick={handleClick}
          className={`checkmark ${check}`}
          id={props.id}
          data-checked={checked}
          data-identifier={props.identifier}
        ></span>
        {props.label}
      </label>
    </div>
  );
}

export default Checkboxes;

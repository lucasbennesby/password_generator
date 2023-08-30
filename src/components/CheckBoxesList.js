import React, { useState } from "react";
import "./CheckBoxesList.css";
import Checkboxes from "./Checkboxes";

function CheckBoxesList(props) {
  const identifier = [1, 1, 1, 1];
  let sum = 0;

  const handleCheck = (check) => {
    console.log(check.dataset.checked);
    if (check.dataset.checked == 1) {
      sum -= parseInt(check.dataset.identifier);
    } else {
      sum += parseInt(check.dataset.identifier);
    }
    {
      props.onSum(sum, check);
    }
  };

  return (
    <div className="checkbox_wrapper">
      <Checkboxes
        onCheck={handleCheck}
        for="uppercase"
        label="Include Uppercase Letters"
        id="uppercase"
        identifier={identifier[0]}
      />
      <Checkboxes
        onCheck={handleCheck}
        for="lowercase"
        label="Include Lowercase Letters"
        id="lowercase"
        identifier={identifier[1]}
      />
      <Checkboxes
        onCheck={handleCheck}
        for="numbers"
        label="Include Numbers"
        id="numbers"
        identifier={identifier[2]}
      />
      <Checkboxes
        onCheck={handleCheck}
        for="symbols"
        label="Include Symbols"
        id="symbols"
        identifier={identifier[3]}
      />
    </div>
  );
}

export default CheckBoxesList;

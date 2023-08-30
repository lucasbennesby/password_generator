import React, { useState } from "react";
import "./PasswordForm.css";

import PasswordDisplay from "./PasswordDisplay";
import LengthSelector from "./LengthSelector";
import StrengthShow from "./StrengthShow";
import GenerateButton from "./GenerateButton";
import CheckBoxesList from "./CheckBoxesList";

function PasswordForm() {
  const [length, setLength] = useState(0);
  const [password, setPassword] = useState("p4$5W0rD!");
  const [soma, setSoma] = useState(0);
  const [active, setActive] = useState({
    uppercase: "",
    lowercase: "",
    numbers: "",
    symbols: "",
  });

  const handleSum = (sum, check) => {
    if (check.dataset.checked == 0) {
      switch (true) {
        case check.id === "uppercase":
          setActive((prevState) => {
            return { ...prevState, uppercase: check.id };
          });
          break;
        case check.id === "lowercase":
          setActive((prevState) => {
            return { ...prevState, lowercase: check.id };
          });
          break;
        case check.id === "numbers":
          setActive((prevState) => {
            return { ...prevState, numbers: check.id };
          });
          break;
        case check.id === "symbols":
          setActive((prevState) => {
            return { ...prevState, symbols: check.id };
          });
          break;
      }
    } else {
      switch (true) {
        case check.id === "uppercase":
          setActive((prevState) => {
            return { ...prevState, uppercase: "" };
          });
          break;
        case check.id === "lowercase":
          setActive((prevState) => {
            return { ...prevState, lowercase: "" };
          });
          break;
        case check.id === "numbers":
          setActive((prevState) => {
            return { ...prevState, numbers: "" };
          });
          break;
        case check.id === "symbols":
          setActive((prevState) => {
            return { ...prevState, symbols: "" };
          });
          break;
      }
    }

    setSoma(soma + sum);
  };
  const handleChange = (enteredLength) => {
    // console.log(enteredLength);
    setLength(enteredLength);
  };
  const handleGenerate = (generatedPassword) => {
    setPassword(generatedPassword);
  };

  return (
    <div>
      <PasswordDisplay password={password} />
      <div className="Form_wrapper">
        <LengthSelector onChange={handleChange} />
        <CheckBoxesList onSum={handleSum} />
        <StrengthShow
          // onStrength={handleStrength}
          sum={soma}
        />
        <GenerateButton
          onGenerate={handleGenerate}
          length={length}
          active={active}
        />
      </div>
    </div>
  );
}

export default PasswordForm;

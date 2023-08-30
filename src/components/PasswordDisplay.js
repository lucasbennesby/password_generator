import React, { useState } from "react";
import "./PasswordDisplay.css";
import { FaCopy } from "react-icons/fa6";

function PasswordDisplay(props) {
  const [copied, setCopied] = useState(<FaCopy className="copyIcon" />);

  const handleClick = (e) => {
    navigator.clipboard.writeText(props.password);

    setCopied("Copied!");
    setTimeout(() => {
      setCopied(<FaCopy className="copyIcon" />);
    }, 400);
  };

  return (
    <div className="display__wrapper">
      {props.password}

      <button
        className="copyBtn"
        onClick={handleClick}
      >
        {copied}
      </button>
    </div>
  );
}

export default PasswordDisplay;

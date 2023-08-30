import React, { useState } from "react";
import "./StrengthShow.css";

function StrengthShow(props) {
  let indicator;

  if (props.sum > 0) {
    switch (props.sum) {
      case 1:
        indicator = (
          <>
            <h3>Weak</h3>
            <span className="indicator indicator_active"></span>
            <span className="indicator "></span>
            <span className="indicator "></span>
            <span className="indicator "></span>
          </>
        );
        break;
      case 2:
        indicator = (
          <>
            <h3>Medium</h3>
            <span className="indicator indicator_active"></span>
            <span className="indicator indicator_active"></span>
            <span className="indicator "></span>
            <span className="indicator "></span>
          </>
        );
        break;
      case 3:
        indicator = (
          <>
            <h3>Strong</h3>
            <span className="indicator indicator_active"></span>
            <span className="indicator indicator_active"></span>
            <span className="indicator indicator_active"></span>
            <span className="indicator "></span>
          </>
        );
        break;
      case 4:
        indicator = (
          <>
            <h3>Impenetrable</h3>
            <span className="indicator indicator_active"></span>
            <span className="indicator indicator_active"></span>
            <span className="indicator indicator_active"></span>
            <span className="indicator indicator_active"></span>
          </>
        );
        break;
      case 0:
        <>
          <span className="indicator "></span>
          <span className="indicator "></span>
          <span className="indicator "></span>
          <span className="indicator "></span>
        </>;
        break;
    }
  } else {
    indicator = (
      <>
        <span className="indicator "></span>
        <span className="indicator "></span>
        <span className="indicator "></span>
        <span className="indicator "></span>
      </>
    );
  }

  return (
    <div className="strength_wrapper">
      <p>STRENGTH</p>
      <div className="s_indicators">{indicator}</div>
    </div>
  );
}

export default StrengthShow;

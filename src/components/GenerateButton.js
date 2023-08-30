import React, { useState } from "react";
import "./GenerateButton.css";

function GenerateButton(props) {
  // const letras = [
  //   "a",
  //   "b",
  //   "c",
  //   "d",
  //   "e",
  //   "f",
  //   "g",
  //   "h",
  //   "i",
  //   "j",
  //   "k",
  //   "l",
  //   "m",
  //   "n",
  //   "o",
  //   "p",
  //   "q",
  //   "r",
  //   "s",
  //   "u",
  //   "v",
  //   "w",
  //   "x",
  //   "y",
  //   "z",
  // ];
  // const letrasUp = [
  //   "A",
  //   "B",
  //   "C",
  //   "D",
  //   "E",
  //   "F",
  //   "G",
  //   "H",
  //   "I",
  //   "J",
  //   "K",
  //   "L",
  //   "M",
  //   "N",
  //   "O",
  //   "P",
  //   "Q",
  //   "R",
  //   "S",
  //   "U",
  //   "V",
  //   "W",
  //   "X",
  //   "Y",
  //   "Z",
  // ];
  // const numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  // const simbolos = ["!", "@", "#", "$", "%", "^", "&", "*"];
  var senha;
  const chara =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*^~";
  let char = "";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  const geraString = () => {
    generateChars();
    var stringAleatoria = "";
    for (var i = 0; i < props.length; i++) {
      stringAleatoria += char.charAt(Math.floor(Math.random() * char.length));
    }
    senha = stringAleatoria;
  };

  const generateChars = () => {
    // console.log(Object.values(props.active));
    if (Object.values(props.active)[0] != "") {
      char += uppercase;
    }
    if (Object.values(props.active)[1] != "") {
      char += lowercase;
    }
    if (Object.values(props.active)[2] != "") {
      char += numbers;
    }
    if (Object.values(props.active)[3] != "") {
      char += symbols;
    }
    // console.log(char);
  };

  const handleClick = () => {
    geraString();

    props.onGenerate(senha);
  };

  return (
    <div className="genButtonWrapper">
      <button
        onClick={handleClick}
        className="genButton"
      >
        Generate
      </button>
    </div>
  );
}

export default GenerateButton;

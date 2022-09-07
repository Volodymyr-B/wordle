import React, { useContext } from "react";
import { AppContext } from "../App";
import KeyboardKey from "./KeyboardKey";

const Keyboard = () => {
  const keys1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const keys2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const keys3 = ["z", "x", "c", "v", "b", "n", "m"];
  //-------------------------------------------------------------
  const { arrGreen, arrYellow, arrGrey } = useContext(AppContext);
  const colorCheck = (keyVal) => {
    const green = arrGreen.current.includes(keyVal);
    const yellow =
      arrYellow.current.includes(keyVal) && !arrGreen.current.includes(keyVal);
    const grey = arrGrey.current.includes(keyVal);
    let keyboardColor;
    keyboardColor = green ? "green" : yellow ? "yellow" : grey ? "grey" : "";
    return keyboardColor;
  };

  //-------------------------------------------------------------
  return (
    <div className="keyboard">
      <div className="keyboard_row">
        {keys1.map((keyValue) => (
          <KeyboardKey
            key={keyValue}
            keyValue={keyValue}
            keyboardColor={colorCheck(keyValue)}
          />
        ))}
      </div>

      <div className="keyboard_row">
        <div className="spacer"></div>
        {keys2.map((keyValue) => (
          <KeyboardKey
            key={keyValue}
            keyValue={keyValue}
            keyboardColor={colorCheck(keyValue)}
          />
        ))}
        <div className="spacer"></div>
      </div>
      <div className="keyboard_row">
        <KeyboardKey keyValue={"enter"} keyboardColor={"large"} />
        {keys3.map((keyValue) => (
          <KeyboardKey
            key={keyValue}
            keyValue={keyValue}
            keyboardColor={colorCheck(keyValue)}
          />
        ))}
        <KeyboardKey keyValue={"delete"} keyboardColor={"large"} />
      </div>
    </div>
  );
};

export default Keyboard;

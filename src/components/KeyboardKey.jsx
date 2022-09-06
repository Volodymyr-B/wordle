import React, { useContext } from "react";
import { AppContext } from "../App";

const KeyboardKey = ({ keyValue, keyboardColor }) => {
  const { onEnter, onDelete, onAddLetter } = useContext(AppContext);
  const pushKey = () => {
    if (keyValue === "enter") {
      onEnter();
    } else if (keyValue === "delete") {
      onDelete();
    } else {
      onAddLetter(keyValue);
    }
  };

  return (
    <div className={`keyboard_key + ${keyboardColor}`} onClick={pushKey}>
      {keyValue}
    </div>
  );
};

export default KeyboardKey;

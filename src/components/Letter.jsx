import React, { useContext } from "react";
import { AppContext } from "../App";

const Letter = ({ row, line }) => {
  const { correctWord, board, position } = useContext(AppContext);
  const letter = board[row][line];
  const green = correctWord[line] === letter;
  const yellow = !green && (letter !== "") & correctWord.includes(letter);

  let color = "";
  color = position.row > row && (green ? "green" : yellow ? "yellow" : "grey");
  let animation = "";
  animation = letter !== "" ? "animate" : "";

  return <div className={`board_item + ${color} + ${animation}`}>{letter}</div>;
};

export default Letter;

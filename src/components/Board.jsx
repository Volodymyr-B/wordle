import React from "react";
import Letter from "./Letter";

const Board = () => {
  return (
    <>
      <div className="board">
        <div className="board_row">
          <Letter row={0} line={0} />
          <Letter row={0} line={1} />
          <Letter row={0} line={2} />
          <Letter row={0} line={3} />
        </div>
        <div className="board_row">
          <Letter row={1} line={0} />
          <Letter row={1} line={1} />
          <Letter row={1} line={2} />
          <Letter row={1} line={3} />
        </div>
        <div className="board_row">
          <Letter row={2} line={0} />
          <Letter row={2} line={1} />
          <Letter row={2} line={2} />
          <Letter row={2} line={3} />
        </div>
        <div className="board_row">
          <Letter row={3} line={0} />
          <Letter row={3} line={1} />
          <Letter row={3} line={2} />
          <Letter row={3} line={3} />
        </div>
      </div>
    </>
  );
};

export default Board;

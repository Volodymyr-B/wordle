import { useEffect, useRef, useState } from "react";
import { createContext } from "react";
import Board from "./components/Board";
import End from "./components/End";
import Floater from "./components/Floater";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import words from "./words.json";

export const AppContext = createContext();
const correctWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const defaultBoard = [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
  ];
  const arrGreen = useRef([]);
  const arrYellow = useRef([]);
  const arrGrey = useRef([]);

  const [floater, setFloater] = useState(false);
  const [finish, setFinish] = useState({ win: false, lost: false });
  const [board, setBoard] = useState(defaultBoard);
  const [position, setPosition] = useState({ row: 0, line: 0 });
  const [attempts, setAttempts] = useState(0);
  const [colors, setColors] = useState("");

  useEffect(() => {
    for (let i = 0; i < colors.length; i++) {
      if (correctWord[i] === colors[i]) {
        arrGreen.current.push(colors[i]);
      } else if (
        !arrGreen.current.includes(colors[i]) &&
        correctWord.includes(colors[i])
      ) {
        arrYellow.current.push(colors[i]);
      } else {
        arrGrey.current.push(colors[i]);
      }
    }
    setAttempts(position.row);
  }, [position.row]);

  const onEnter = () => {
    if (position.line !== 4) return;
    let attempt = board[position.row].join("");
    setColors(board[position.row]);
    if (attempt === correctWord) {
      setPosition({ ...position, row: position.row + 1, line: 5 });
      setFinish({ ...finish, win: true });
    } else if (
      attempt !== correctWord &&
      position.row === 3 &&
      words.includes(attempt)
    ) {
      setPosition({ ...position, row: position.row + 1, line: 5 });
      setFinish({ ...finish, lost: true });
    } else if (words.includes(attempt)) {
      setPosition({ ...position, row: position.row + 1, line: 0 });
    } else handleFloater();
  };
  const onDelete = () => {
    if (position.line === 0 || position.line === 5) return;
    const newBoard = [...board];
    newBoard[position.row][position.line - 1] = "";
    setBoard(newBoard);
    setPosition({ ...position, line: position.line - 1 });
  };
  const onAddLetter = (keyVal) => {
    if (position.line >= 4) return;
    const newBoard = [...board];
    newBoard[position.row][position.line] = keyVal;
    setBoard(newBoard);
    setPosition({ ...position, line: position.line + 1 });
  };
  const handleFloater = () => {
    const sec = () => {
      setFloater(false);
    };
    setFloater(true);
    setTimeout(sec, 1000);
  };
  const handleKey = (e) => {
    if (e.key === "Enter") {
      onEnter();
    } else if (e.key === "Backspace") {
      onDelete();
    } else if (/^[A-Za-z]$/.test(e.key)) {
      onAddLetter(e.key.toLowerCase());
    } else return;
  };
  useEffect(() => {
    document.addEventListener("keyup", handleKey);
    return () => {
      document.removeEventListener("keyup", handleKey);
    };
  }, [handleKey]);

  return (
    <div className="App">
      <Header />
      <AppContext.Provider
        value={{
          board,
          setBoard,
          position,
          setPosition,
          correctWord,
          setColors,
          arrGreen,
          arrYellow,
          arrGrey,
          attempts,
          finish,
          setFinish,
          floater,
          setFloater,
          onEnter,
          onDelete,
          onAddLetter,
          handleFloater,
        }}
      >
        <Floater />
        <End />
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  );
}

export default App;

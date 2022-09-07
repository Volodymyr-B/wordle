import React, { useContext } from "react";
import { AppContext } from "../App";

const Header = () => {
  const { onRestart } = useContext(AppContext);
  return (
    <div className="header">
      <div onClick={onRestart}>Wordle</div>
    </div>
  );
};

export default Header;

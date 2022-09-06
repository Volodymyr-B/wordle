import React, { useContext } from "react";
import { AppContext } from "../App";

const Floater = () => {
  const { floater } = useContext(AppContext);

  return <>{floater && <div className="floater">there is no such word</div>}</>;
};

export default Floater;

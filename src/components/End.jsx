import React, { useContext } from "react";
import { AppContext } from "../App";

const End = () => {
  const { finish, setFinish, attempts, correctWord } = useContext(AppContext);
  const modalOut = () => setFinish({ win: false, lost: false });
  const stayHere = (e) => e.stopPropagation();

  return (
    <>
      {(finish.win || finish.lost) && (
        <div className="finish" onClick={modalOut}>
          <div className="finish_stats" onClick={stayHere}>
            <div className="modal_out" onClick={modalOut}>
              &times;
            </div>
            {finish.win && (
              <div className="finish_container">
                <div>Congratulations</div>
                <div>You win </div>
                <div>
                  number of attempts: <span>{attempts}</span>
                </div>
                <div>Keep it up!</div>
              </div>
            )}
            {finish.lost && (
              <div className="finish_container">
                <div>{`Unfortunately  ${":("}`}</div>
                <div>you didn't guess word</div>
                <div>
                  correct word: <span>{correctWord}</span>
                </div>
                <div>good luck next time</div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default End;

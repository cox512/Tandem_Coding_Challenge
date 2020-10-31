import React, { useState } from "react";
import Intro from "./Intro";
import Gameboard from "./Gameboard";

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [roundNumber, setRoundNumber] = useState(0);

  const onButtonClick = (evt) => {
    setShowIntro(false);
    setRoundNumber(roundNumber + 1);
  };

  return (
    <div>
      <header>
        <h1 className="title">Quizactly!</h1>
      </header>
      {localStorage.getItem("highScore") ? (
        <h5 className="high-score">
          HIGH SCORE: {localStorage.getItem("highScore")}
        </h5>
      ) : null}

      <div className="frame">
        <div data-test="app-component" className="intro">
          {showIntro ? (
            <h3>
              <Intro onButtonClick={onButtonClick} />
            </h3>
          ) : (
            <div className="play-area">
              <Gameboard
                roundNumber={roundNumber}
                setRoundNumber={setRoundNumber}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

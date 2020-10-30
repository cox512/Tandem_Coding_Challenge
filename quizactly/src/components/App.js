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
      <h1 className="title">Quizactly!</h1>
      <div data-test="app-component" className="play-area">
        {showIntro ? (
          <h3>
            <Intro onButtonClick={onButtonClick} />
          </h3>
        ) : (
          <div>
            <Gameboard
              roundNumber={roundNumber}
              setRoundNumber={setRoundNumber}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

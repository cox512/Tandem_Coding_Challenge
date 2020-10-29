import React, { useState } from "react";
import Intro from "./Intro";
import Score from "./Score";
import Round from "./Round";
import Gameboard from "./Gameboard";

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [roundNumber, setRoundNumber] = useState(0);

  const onButtonClick = (evt) => {
    evt.preventDefault();
    setShowIntro(false);
    setRoundNumber(roundNumber + 1);
  };

  return (
    <div data-test="app-component">
      <h1>Quizactly!</h1>

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
  );
};

export default App;

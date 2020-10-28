import React, { useState } from "react";
import Intro from "./Intro";
import Score from "./Score";
import Round from "./Round";
import Display from "./Display";

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [roundNumber, setRoundNumber] = useState(0);

  const onStartButtonClick = () => {
    setShowIntro(false);
    setRoundNumber(roundNumber + 1);
  };

  const introDisplay = () => {
    if (showIntro) {
      return <Intro onButtonClick={onStartButtonClick} />;
    }
  };

  return (
    <div data-test="app-component">
      <h1>Quizactly!</h1>
      <h3>{introDisplay()}</h3>
      {!showIntro ? (
        <>
          <Round roundNumber={roundNumber} />
          <Score />
          <Display />
        </>
      ) : null}
    </div>
  );
};

export default App;

import React from "react";

const Intro = ({ onButtonClick }) => {
  const clearHighScore = () => {
    localStorage.removeItem("highScore");
    document.location.reload();
  };

  return (
    <div data-test="intro-component">
      <h1 data-test="intro-message" className="intro-message">
        Test your trivia knowledge!
        <br />
        Impress your friends!
      </h1>
      <button
        className="start-button"
        data-test="start-game-button"
        onClick={(evt) => onButtonClick(evt)}
      >
        Let's Play!
      </button>
      <br />
      <button
        data-test="reset-high-score-button"
        className="high-score-reset"
        onClick={() => clearHighScore()}
      >
        Reset High Score
      </button>
    </div>
  );
};

export default Intro;

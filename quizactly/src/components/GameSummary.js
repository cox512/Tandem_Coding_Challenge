import React from "react";

const GameSummary = ({ score, gameReset }) => {
  const finalMessage = () => {
    if (score >= 8) {
      return "You're Brilliant!";
    } else if (score >= 4) {
      return "Keep Working at it!";
    } else {
      return "This Is Why We Practice.";
    }
  };

  return (
    <div className="game-summary">
      <h3 className="final-message">
        Your final score is {score}.
        <br />
        {finalMessage()}
      </h3>
      <button className="replay-button" onClick={() => gameReset()}>
        Play Again?
      </button>
    </div>
  );
};

export default GameSummary;

import React from "react";

const GameSummary = ({ score, finalMessage, gameReset }) => {
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

import React from "react";

const Score = ({ score }) => {
  return (
    <div data-test="score-component">
      <h3>
        Score: <span data-test="score">{score}</span>
      </h3>
    </div>
  );
};

export default Score;

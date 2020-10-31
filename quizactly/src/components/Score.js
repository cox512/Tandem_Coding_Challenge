import React from "react";

const Score = ({ score }) => {
  return (
    <h3 data-test="score-component" className="score">
      Score: <span data-test="score">{score}</span>
    </h3>
  );
};

export default Score;

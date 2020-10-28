import React, { useState } from "react";

const Score = () => {
  const [score, setScore] = useState(0);
  return (
    <div data-test="score-component">
      <h3>
        Score: <span data-test="score">{score}</span>
      </h3>
    </div>
  );
};

export default Score;

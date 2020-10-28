import React, { useState } from "react";

const Round = () => {
  const [roundNumber, setRoundNumber] = useState(0);

  return (
    <div data-test="round-component">
      <h3>
        Round: <span data-test="round">{roundNumber}</span>
      </h3>
    </div>
  );
};

export default Round;

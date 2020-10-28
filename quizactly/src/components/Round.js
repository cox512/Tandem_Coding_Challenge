import React from "react";

const Round = ({ roundNumber }) => {
  return (
    <div data-test="round-component">
      <h3>
        Round: <span data-test="round">{roundNumber}</span>
      </h3>
    </div>
  );
};

export default Round;

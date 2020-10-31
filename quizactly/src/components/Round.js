import React from "react";

const Round = ({ roundNumber }) => {
  return (
    <h3 data-test="round-component" className="round">
      Round: <span data-test="round">{roundNumber}</span>
    </h3>
  );
};

export default Round;

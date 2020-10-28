import React from "react";
import Question from "./Question";
import Answers from "./Answers";

const Display = () => {
  return (
    <div data-test="display-component">
      Display
      <Question />
      <Answers></Answers>
    </div>
  );
};

export default Display;

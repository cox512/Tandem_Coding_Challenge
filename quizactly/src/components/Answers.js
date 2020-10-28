import React from "react";
import AnswerItem from "./AnswerItem";

const Answers = ({ answers }) => {
  return (
    <div data-test="answers-component">
      Answers
      <AnswerItem answers={answers} />
    </div>
  );
};

export default Answers;

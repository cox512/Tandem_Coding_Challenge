import React from "react";

const Question = ({ question }) => {
  return (
    <div data-test="question-component">
      {question ? <h4 data-test="question">{question}</h4> : null}
    </div>
  );
};

export default Question;

import React from "react";

const Question = ({ question }) => {
  return (
    <div data-test="question-component">
      {question ? (
        <h4>
          Question: <span data-test="question">{question}</span>
        </h4>
      ) : null}
    </div>
  );
};

export default Question;

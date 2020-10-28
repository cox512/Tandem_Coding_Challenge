import React from "react";

const Question = ({ questions }) => {
  console.log(questions[0].question);
  return (
    <div data-test="question-component">
      {questions ? (
        <h4>
          Question:{" "}
          <span data-test="question">
            {questions[questions.length - 1].question}
          </span>
        </h4>
      ) : null}
    </div>
  );
};

export default Question;

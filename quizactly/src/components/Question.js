import React from "react";

const Question = ({ question }) => {
  return (
    <>
      {question ? (
        <h4 data-test="question-component" className="question">
          {question}
        </h4>
      ) : null}
    </>
  );
};

export default Question;

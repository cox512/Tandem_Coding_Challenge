import React from "react";

const AnswerItem = ({ answerChoice, checkAnswer }) => {
  return (
    <div data-test="answer-item-component">
      <button
        className="answer-choice"
        onClick={(evt) => checkAnswer(answerChoice)}
      >
        {answerChoice.choice}
      </button>
    </div>
  );
};

export default AnswerItem;

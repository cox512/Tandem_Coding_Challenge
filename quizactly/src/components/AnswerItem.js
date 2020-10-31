import React from "react";

const AnswerItem = ({ answerChoice, checkAnswer }) => {
  return (
    <button
      data-test="answer-item-component"
      className="answer-choice"
      onClick={(evt) => checkAnswer(answerChoice)}
    >
      {answerChoice.choice}
    </button>
  );
};

export default AnswerItem;

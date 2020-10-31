import React from "react";
import AnswerItem from "./AnswerItem";

const Answers = ({ incorrectAnswers, correctAnswer, checkAnswer }) => {
  const buildRandomAnswerArray = () => {
    let answerArray = [];
    answerArray.push({ choice: correctAnswer, correct: true });
    incorrectAnswers.forEach((incorrectAnswer) => {
      answerArray.push({ choice: incorrectAnswer, correct: false });
    });
    let randomizedAnswers = [];
    while (answerArray.length > 0) {
      let randomIndex = Math.floor(Math.random() * answerArray.length);
      randomizedAnswers.push(answerArray[randomIndex]);
      answerArray.splice(randomIndex, 1);
    }
    return randomizedAnswers;
  };

  const renderedAnswers = buildRandomAnswerArray().map((answer) => {
    return (
      <AnswerItem
        key={answer.choice}
        data-test="answer-choice"
        answerChoice={answer}
        checkAnswer={checkAnswer}
      />
    );
  });

  return (
    <div data-test="answers-component" className="answer-field">
      {renderedAnswers}
    </div>
  );
};

export default Answers;

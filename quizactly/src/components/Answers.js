import React, { useState } from "react";
import AnswerItem from "./AnswerItem";

const Answers = ({ incorrectAnswers, correctAnswer, checkAnswer }) => {
  //Randomize the list of displayed answers
  const buildRandomAnswerArray = () => {
    let answerArray = [];
    answerArray.push({ choice: correctAnswer, correct: true });
    incorrectAnswers.forEach((answer) => {
      answerArray.push({ choice: answer, correct: false });
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
    console.log("answer", answer);
    return (
      <span key={answer.choice} id={answer.choice}>
        <AnswerItem
          data-test="answer-choice"
          answerChoice={answer}
          checkAnswer={checkAnswer}
        />
      </span>
    );
  });

  return (
    <div data-test="answers-component">
      <h5>Answers:</h5>
      {renderedAnswers}
    </div>
  );
};

export default Answers;

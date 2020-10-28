import React, { useState } from "react";
import Question from "./Question";
import Answers from "./Answers";
import Data from "../data/Apprentice_TandemFor400_Data.json";

const gatherQuestions = () => {
  let questionsArray = [];
  let askedQuestions = {};
  while (questionsArray.length < 10) {
    let questionIndex = Math.floor(Math.random() * 21);
    if (!askedQuestions[questionIndex]) {
      askedQuestions[questionIndex] = 1;
      questionsArray.push(Data[questionIndex]["question"]);
    }
  }
  return questionsArray;
};
gatherQuestions();

const Display = () => {
  const [questions, setQuestions] = useState([gatherQuestions()]);
  const [answers, setAnswers] = useState([]);

  console.log(questions);
  return (
    <div data-test="display-component">
      Display
      <Question questions={questions} />
      <Answers answers={answers} />
    </div>
  );
};

export default Display;

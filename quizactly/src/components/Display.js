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
      questionsArray.push(Data[questionIndex]);
    }
  }
  return questionsArray;
};

const Display = () => {
  const [questions, setQuestions] = useState([gatherQuestions()]);

  return (
    <div data-test="display-component">
      Display
      <Question questions={questions[0]} />
      <Answers answers={questions[0]} />
    </div>
  );
};

export default Display;

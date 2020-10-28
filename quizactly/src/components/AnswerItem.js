import React from "react";

const AnswerItem = ({ answers }) => {
  // console.log(answers[answers.length - 1].correct);
  // console.log(answers[answers.length - 1].incorrect);
  const buildAnswerArray = () => {
    let answerArray = [];
    answerArray.push(answers[answers.length - 1].correct);
    for (let answer in answers[answers.length - 1].incorrect) {
      answerArray.push(answers[answers.length - 1].incorrect[answer]);
    }
    return answerArray;
  };
  console.log(buildAnswerArray());
  return (
    <div data-test="answer-item-component">
      <h5>AnswerItem</h5>
    </div>
  );
};

export default AnswerItem;

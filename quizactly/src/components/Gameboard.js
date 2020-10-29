import React, { useState } from "react";
import Question from "./Question";
import Answers from "./Answers";
import Round from "./Round";
import Score from "./Score";
import Reaction from "./Reaction";
import Data from "../data/Apprentice_TandemFor400_Data.json";

//Pick 10 random questions from the JSON doc and store them in an array
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

const Gameboard = ({ roundNumber, setRoundNumber }) => {
  const [score, setScore] = useState(0);
  const [showReaction, setShowReaction] = useState(false);
  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);
  const [triggerReaction, setTriggerReaction] = useState(false);
  const [questions, setQuestions] = useState([gatherQuestions()]);
  const [questionNumber, setQuestionNumber] = useState(0);

  const reactionTimer = () => {
    setTimeout(() => {
      setShowReaction(false);
    }, 1300);
  };

  const checkAnswer = (answerChoice) => {
    if (answerChoice.correct === true) {
      setScore(score + 1);
      setAnswerIsCorrect(true);
    } else {
      setAnswerIsCorrect(false);
    }
    setShowReaction(true);
    reactionTimer();
    setTriggerReaction(!triggerReaction);

    if (roundNumber === 10) {
      setTimeout(() => {
        setRoundNumber(roundNumber + 1);
      }, 1300);
    } else {
      setQuestionNumber(questionNumber + 1);
      setRoundNumber(roundNumber + 1);
    }
  };

  const finalMessage = () => {
    if (score >= 8) {
      return "You're Brilliant!";
    } else if (score >= 4) {
      return "Keep Working at it!";
    } else {
      return "This Is Why We Practice";
    }
  };

  const gameReset = () => {
    setQuestionNumber(0);
    setRoundNumber(1);
    setScore(0);
    setQuestions([gatherQuestions()]);
  };

  return (
    <div data-test="display-component">
      {roundNumber <= 10 ? (
        <>
          <div>
            <Round roundNumber={roundNumber} />
            <Score score={score} />
          </div>

          <div>
            {!showReaction ? (
              <div>
                <Question question={questions[0][questionNumber].question} />
                <div>
                  <Answers
                    incorrectAnswers={questions[0][questionNumber].incorrect}
                    correctAnswer={questions[0][questionNumber].correct}
                    score={score}
                    setScore={setScore}
                    checkAnswer={checkAnswer}
                  />
                </div>
              </div>
            ) : (
              <Reaction
                answerIsCorrect={answerIsCorrect}
                triggerReaction={triggerReaction}
                setTriggerReaction={setTriggerReaction}
              />
            )}
          </div>
        </>
      ) : (
        <div>
          <h3>You Got {score} Answers Right.</h3>
          <h3>{finalMessage()}</h3>
          <button onClick={() => gameReset()}>Play Again?</button>
        </div>
      )}
    </div>
  );
};

export default Gameboard;

import React, { useState } from "react";
import Question from "./Question";
import Answers from "./Answers";
import Round from "./Round";
import Score from "./Score";
import Reaction from "./Reaction";
import Data from "../data/Apprentice_TandemFor400_Data.json";
import GameSummary from "./GameSummary";

const gatherRandomizedQuestions = () => {
  let questionsArray = [];
  let askedQuestions = {};
  while (questionsArray.length < 10) {
    let questionIndex = Math.floor(Math.random() * Data.length);
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
  const [questions, setQuestions] = useState([gatherRandomizedQuestions()]);
  const [questionNumber, setQuestionNumber] = useState(0);

  const delayedReactions = () => {
    setTimeout(() => {
      setShowReaction(false);
      setRoundNumber(roundNumber + 1);
      if (roundNumber !== 10) {
        setQuestionNumber(questionNumber + 1);
      }
    }, 3000);
  };

  const checkAnswer = (answerChoice) => {
    if (answerChoice.correct === true) {
      setScore(score + 1);
      setAnswerIsCorrect(true);
    } else {
      setScore(score - 1);
      setAnswerIsCorrect(false);
    }
    setShowReaction(true);
    delayedReactions();
    setTriggerReaction(!triggerReaction);
  };

  const finalMessage = () => {
    if (score >= 8) {
      return "You're Brilliant!";
    } else if (score >= 4) {
      return "Keep Working at it!";
    } else {
      return "This Is Why We Practice.";
    }
  };

  const setHighScore = () => {
    if (
      !localStorage.getItem("highScore") ||
      score > localStorage.getItem("highScore")
    ) {
      return localStorage.setItem("highScore", score);
    }
  };

  const gameReset = () => {
    setHighScore();
    setQuestionNumber(0);
    setRoundNumber(1);
    setScore(0);
    setQuestions([gatherRandomizedQuestions()]);
  };

  return (
    <main data-test="gameboard-component">
      {roundNumber <= 10 ? (
        <React.Fragment>
          <div className="game-stats">
            <Round roundNumber={roundNumber} />
            <Score score={score} />
          </div>
          {!showReaction ? (
            <div className="q-a-display">
              <Question question={questions[0][questionNumber].question} />
              <Answers
                incorrectAnswers={questions[0][questionNumber].incorrect}
                correctAnswer={questions[0][questionNumber].correct}
                score={score}
                setScore={setScore}
                checkAnswer={checkAnswer}
              />
            </div>
          ) : (
            <Reaction
              answerIsCorrect={answerIsCorrect}
              triggerReaction={triggerReaction}
              setTriggerReaction={setTriggerReaction}
              correctAnswer={questions[0][questionNumber].correct}
            />
          )}
        </React.Fragment>
      ) : (
        <GameSummary
          score={score}
          finalMessage={finalMessage}
          gameReset={gameReset}
        />
      )}
    </main>
  );
};

export default Gameboard;

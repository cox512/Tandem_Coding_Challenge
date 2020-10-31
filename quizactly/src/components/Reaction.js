import React, { useState, useEffect } from "react";
import { correctResponses, incorrectResponses } from "../data/responses";

let reactionColor;
let reactionFont;

const Reaction = ({ answerIsCorrect, triggerReaction, correctAnswer }) => {
  const [reaction, setReaction] = useState("");
  const [pointsEarned, setPointsEarned] = useState("-1");

  useEffect(() => {
    let properResponse = incorrectResponses;
    if (answerIsCorrect) {
      properResponse = correctResponses;
      setPointsEarned("+1");
      reactionColor = {
        color: "rgb(129, 201, 34",
      };
      reactionFont = { fontFamily: "'Bubblegum Sans', cursive" };
    } else {
      reactionColor = { color: "red" };
      reactionFont = { fontFamily: "'Caladea', serif" };
    }
    let randomIndex = Math.floor(Math.random() * properResponse.length);
    let response = properResponse[randomIndex];
    setReaction(response);
  }, [triggerReaction]);

  return (
    <div className="reaction-field" style={reactionColor}>
      <p data-test="points-earned" className="points-earned">
        {pointsEarned}
      </p>
      <h3
        data-test="reaction-component"
        className="reaction"
        style={reactionFont}
      >
        {reaction}
      </h3>
      <p className="answer-intro">The Correct Answer Is:</p>
      <p data-test="correct-answer" className="answer-reveal">
        {correctAnswer}
      </p>
    </div>
  );
};

export default Reaction;

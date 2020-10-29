import React, { useState, useEffect } from "react";

const correctResponses = [
  "Yayyy!!!",
  "Righteous!",
  "Way To Go!",
  "Genius!",
  "Cheater!",
  "WOW!!",
  "Bravo!",
  "Outstanding!",
  "Uh-Huh!",
  "Sweet!",
];

const incorrectResponses = [
  "Nope",
  "Sorry",
  "Ruh-Roh",
  "Oofff...",
  "Better Luck Next Time",
  "Incorrect",
  "Try harder next time",
  "Booooo...",
  "Negative",
  "Wrong!",
];

const Reaction = ({ answerIsCorrect, triggerReaction }) => {
  const [reaction, setReaction] = useState("");

  useEffect(() => {
    if (answerIsCorrect) {
      let randomIndex = Math.floor(Math.random() * correctResponses.length);
      let response = correctResponses.splice(randomIndex, 1);
      setReaction(response);
    } else {
      let randomIndex = Math.floor(Math.random() * incorrectResponses.length);
      let response = incorrectResponses.splice(randomIndex, 1);
      setReaction(response);
    }
  }, [triggerReaction]);
  return <div>{reaction}</div>;
};

export default Reaction;

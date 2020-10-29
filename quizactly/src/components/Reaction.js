import React, { useState, useEffect } from "react";
import { correctResponses, incorrectResponses } from "../data/responses";

const Reaction = ({ answerIsCorrect, triggerReaction }) => {
  const [reaction, setReaction] = useState("");

  useEffect(() => {
    let properResponse = incorrectResponses;
    if (answerIsCorrect) {
      properResponse = correctResponses;
    }
    let randomIndex = Math.floor(Math.random() * properResponse.length);
    let response = properResponse[randomIndex];
    setReaction(response);
  }, [triggerReaction]);
  return <div>{reaction}</div>;
};

export default Reaction;

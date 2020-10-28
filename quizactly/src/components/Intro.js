import React from "react";

const Intro = ({ onButtonClick }) => {
  return (
    <div data-test="intro-component">
      <h1 data-test="intro-message">
        Test your trivia knowledge! Impress your friends!
      </h1>
      <button data-test="start-game-button" onClick={(evt) => onButtonClick()}>
        Let's Play!
      </button>
    </div>
  );
};

export default Intro;

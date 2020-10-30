import React from "react";

const Intro = ({ onButtonClick }) => {
  return (
    <div data-test="intro-component">
      <h1 data-test="intro-message">Test your trivia knowledge!</h1>
      <h1>Impress your friends!</h1>
      <button
        data-test="start-game-button"
        onClick={(evt) => onButtonClick(evt)}
      >
        Let's Play!
      </button>
    </div>
  );
};

export default Intro;

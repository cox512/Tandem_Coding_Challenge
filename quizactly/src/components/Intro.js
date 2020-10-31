import React from "react";

const Intro = ({ onButtonClick }) => {
  return (
    <div data-test="intro-component">
      <h1 data-test="intro-message" className="intro-message">
        Test your trivia knowledge!
        <br />
        Impress your friends!
      </h1>
      <button
        className="start-button"
        data-test="start-game-button"
        onClick={(evt) => onButtonClick(evt)}
      >
        Let's Play!
      </button>
    </div>
  );
};

export default Intro;

import React from "react";

const Intro = ({ setShowIntro }) => {
  return (
    <div data-test="intro-component">
      <h1 data-test="intro-message">
        Test your trivia knowledge! Impress your friends!
      </h1>
      <button data-test="start-button" onClick={(evt) => setShowIntro(false)}>
        Let's Play!
      </button>
    </div>
  );
};

export default Intro;

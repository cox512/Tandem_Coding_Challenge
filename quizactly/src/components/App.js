import React, { useState } from "react";
import Intro from "./Intro";
import AnswerItem from "./AnswerItem";
import Answers from "./Answers";
import Question from "./Question";
import Score from "./Score";
import Round from "./Round";
import Display from "./Display";

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  const introDisplay = () => {
    if (showIntro) {
      return <Intro showIntro={showIntro} setShowIntro={setShowIntro} />;
    }
  };

  return (
    <div data-test="app-component">
      <h1>Quizactly!</h1>
      <h3>{introDisplay()}</h3>
      <Round />
      <Score />
      <Display>
        <Question />
        <Answers>
          <AnswerItem />
        </Answers>
      </Display>
    </div>
  );
};

export default App;

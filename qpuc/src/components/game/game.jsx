import { useState } from "react";
import TimerExample from "./../timerexample/timerexample";
import FourInOne from "./../fourstages/fourstages";
import Question from "./../question/question";

const Game = () => {
  const [startQuestions, setStartQuestions] = useState(false);
  const [score, setScore] = useState(0);

  const toggleStartQuestions = () => {
    setStartQuestions((prevStart) => !prevStart);
  };

  const handleTimeEnd = () => {
    console.log("Le timer est terminé !");
    setStartQuestions(false); // On arrête le timer après expiration
  };

  const handleScore = (newScore) => {
    setScore(newScore);
  };

  return (
    <>
      <div class="container">
        <h1>Question Pour Un Champion</h1>

        <button className="btn btn-primary" onClick={toggleStartQuestions}>
          {startQuestions ? "stop game" : "start game"}
        </button>
        <div class="row">
          <div class="col-md-6">
            <div class="left-column">
              <div className="container">
                <FourInOne></FourInOne>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="right-column">
              <div>Current Score {score}</div>
              <Question
                showFront={false}
                question="Quel est la couleur du cheval de Napoleon?"
                answer="blanc"
                points={score}
                onCountScore={handleScore}
              ></Question>

              <TimerExample start={startQuestions} onTimeEnd={handleTimeEnd} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;

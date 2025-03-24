import { useState } from "react";
import TimerExample from "./../timerexample/timerexample";
import FourInOne from "./../fourstages/fourstages";
import Question from "./../question/question";
import './game.scss'

const Game = () => {
  const [startQuestions, setStartQuestions] = useState(false);
  const [score, setScore] = useState(0);

  const handleTimeEnd = () => {
    console.log("Le timer est terminé !");
    setStartQuestions(false); // On arrête le timer après expiration
  };

  const handleScore = (newScore) => {
    setScore(newScore);
  };

  const handleStartGame = () => {
    setStartQuestions(true);
  };

  const handleStopGame = () => {
    setStartQuestions(false);
  };


  return (
    <>
      <div class="container">
        <h1 className="champion text-center mb-2">Question Pour Un Champion</h1>

        <div class="row">
          <div class="col-md-6">
            <div class="left-column">
              <div className="container">
                <FourInOne start={startQuestions}></FourInOne>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="right-column">

              <Question
                    question="Quel est la couleur du cheval de Napoleon?"
                    answer="blanc"
                    points={score}
                    onCountScore={handleScore}
                    onStartGame={handleStartGame}
                    onStopGame={handleStopGame}>
              </Question>


              {
                startQuestions ?  
                <>
                  <div>Current Score {score}</div>

    
                  <TimerExample start={startQuestions} onTimeEnd={handleTimeEnd} />
                  </>

                : null
              }

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;

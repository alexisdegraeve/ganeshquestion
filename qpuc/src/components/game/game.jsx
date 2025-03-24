import { useState } from "react";
import TimerExample from "./../timerexample/timerexample";
import FourInOne from "./../fourstages/fourstages";
import Question from "./../question/question";
import './game.scss'

const Game = () => {
  const [startQuestions, setStartQuestions] = useState(false);
  const [score, setScore] = useState(-1);
  const [question, setQuestion] = useState('Quel est la couleur du cheval de Napoleon?');
  const [answer, setAnwser] = useState('blanc');

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

  const handleNextQuestion = () => {
    const rand = Math.floor(1 + Math.random() * (20));
    setQuestion('Quel est la couleur du cheval de Napoleon? ' + rand)
    setAnwser('blanc' + rand)
  }


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
              <div>
                {!startQuestions && score === 4 ? 'BRAVO VOUS AVEZ GAGNEZ' : ''}
                {!startQuestions && score === 3 ? 'TRES BON SCORE' : ''}
                {!startQuestions && (score < 3 && score > -1) ? 'VOUS FEREZ MIEUX LA FOIS PROCHAINE' : ''}
              </div>
            <div>{!startQuestions && score >-1 ? 'Current Score: ' + score : ''}</div>
              <Question
                    question={question}
                    answer={answer}
                    points={score}
                    start={startQuestions}
                    onCountScore={handleScore}
                    onStartGame={handleStartGame}
                    onStopGame={handleStopGame}
                    onNextQuestion={handleNextQuestion}>
              </Question>

              
              {
                startQuestions ?  
                <>
    
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


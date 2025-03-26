import { useState } from "react";
import TimerExample from "./../timerexample/timerexample";
import FourInOne from "./../fourstages/fourstages";
import Question from "./../question/question";
import './game.scss'
import questionsData from './../../assets/questions.json';
import WinCard from "../win/win";
import LoseCard from "../lose/lose";
import StartCard from "../start/start";

const Game = () => {
  const [startQuestions, setStartQuestions] = useState(false);
  const [score, setScore] = useState(-1);
  const [highscore, setHighscore] = useState(-1);
  // const [question, setQuestion] = useState('Quel est la couleur du cheval de Napoleon?');
  // const [answer, setAnwser] = useState('blanc');
  const [theme, setTheme] = useState('');
  const [difficulty, setDifficulty] = useState(1);
  const [questions, setQuestions] = useState([]);

  // useEffect(() => {
  //   randomQuestion();
  // });

  const handleTimeEnd = () => {
    console.log("Le timer est terminé !");
    setStartQuestions(false); // On arrête le timer après expiration
  };

  const handleScore = (newScore) => {
    setScore(newScore);
  };

  const handleRestartGame = () => {
    setDifficulty(1);
    setHighscore(-1);
    setScore(-1);
    setStartQuestions(false);
  };


  const handleStartGame = () => {
    setDifficulty(1);
    setHighscore(-1);
    setScore(-1);
    randomQuestion();
    setStartQuestions(true);
  };

  const handleStopGame = () => {
    setStartQuestions(false);
  };

  const handleNextQuestion = () => {
    randomQuestion();
    // const rand = Math.floor(1 + Math.random() * (20));
    // setQuestion('Quel est la couleur du cheval de Napoleon? ' + rand)
    // setAnwser('blanc' + rand)
  }

  const handleCheckAnswer = (correct) => {    
    if(correct) {
      setDifficulty(difficulty+1);
    } else {
      setDifficulty(1);
    }
    if(difficulty == 4) {
      setStartQuestions(false)
    }
    setHighscore(difficulty)
  }

  const randomQuestion = () => {    
    const totalQuestions = questionsData.length - 1;
    const rand = Math.floor(Math.random() * totalQuestions);
    console.log(rand);
    console.log(totalQuestions);
    setTheme(questionsData[rand].theme);
    setQuestions(questionsData[rand].questions);
    // const difficulty = Math.floor(Math.random() * 3) +1 ;
    // setDifficulty(difficulty)

    /* Si réussi alors */ 

    console.log(JSON.stringify(theme));
    console.log(JSON.stringify(questions));
  }


  return (
    <>
      <div className="container">
        <div className="game-container">
            <FourInOne start={startQuestions} difficulty={difficulty} highscore={highscore}></FourInOne>
            <div className="right-part">
                {!startQuestions && highscore === 4 ? <WinCard onRestartGame={handleRestartGame} /> : ''}
                {!startQuestions && (highscore < 4 && highscore > -1) ? <LoseCard onRestartGame={handleRestartGame} /> : ''}

            

               {!startQuestions  && highscore == -1 ?
                <StartCard onStartGame={handleStartGame}></StartCard> : ''

               }
              {
                startQuestions ?  
                <>
                  <Question
                    theme = {theme}
                    questions={questions}
                    difficulty = {difficulty}
                    points={score}
                    start={startQuestions}
                    onCountScore={handleScore}
                    onStopGame={handleStopGame}                    
                    onNextQuestion={handleNextQuestion}
                    onCheckAnswer={handleCheckAnswer}>
              </Question>
                  <TimerExample start={startQuestions} onTimeEnd={handleTimeEnd} />
                  </>

                : null
              }

            </div>
        </div>
      </div>
    </>
  );
};

export default Game;


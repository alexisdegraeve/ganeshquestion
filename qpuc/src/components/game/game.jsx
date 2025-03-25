import { useState } from "react";
import TimerExample from "./../timerexample/timerexample";
import FourInOne from "./../fourstages/fourstages";
import Question from "./../question/question";
import './game.scss'
import questionsData from './../../assets/questions.json';

const Game = () => {
  const [startQuestions, setStartQuestions] = useState(false);
  const [score, setScore] = useState(-1);
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

  const handleStartGame = () => {
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
            <FourInOne start={startQuestions} difficulty={difficulty}></FourInOne>
            <div className="right-part">
              <div>
                {!startQuestions && score === 4 ? 'BRAVO VOUS AVEZ GAGNEZ' : ''}
                {!startQuestions && score === 3 ? 'TRES BON SCORE' : ''}
                {!startQuestions && (score < 3 && score > -1) ? 'VOUS FEREZ MIEUX LA FOIS PROCHAINE' : ''}
              </div>
            <div>{!startQuestions && score >-1 ? 'Current Score: ' + score : ''}</div>
              <Question
                    theme = {theme}
                    questions={questions}
                    difficulty = {difficulty}
                    points={score}
                    start={startQuestions}
                    onCountScore={handleScore}
                    onStartGame={handleStartGame}
                    onStopGame={handleStopGame}                    
                    onNextQuestion={handleNextQuestion}
                    onCheckAnswer={handleCheckAnswer}>
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
    </>
  );
};

export default Game;


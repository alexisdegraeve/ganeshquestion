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

  const randomQuestion = () => {
    const rand = Math.floor(1 + Math.random() * 4);
    console.log(rand);
    setTheme(questionsData[rand].theme);
    setQuestions(questionsData[rand].questions);
    setDifficulty(difficulty + 1)

    console.log(theme);
    console.log(questions);
  }


  return (
    <>
      <div class="container">
        <div className="game-container">
            <FourInOne start={startQuestions}></FourInOne>
            <div class="right-part">
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
    </>
  );
};

export default Game;


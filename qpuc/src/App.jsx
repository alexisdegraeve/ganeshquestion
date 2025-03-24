import { useState } from "react";
import "./App.scss";
import TimerExample from "./components/timerexample/timerexample";
import FourInOne from "./components/fourstages/fourstages";
import Question from "./components/question/question";

function App() {
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
      
      <Question
        showFront={false}
        question="Quel est la couleur du cheval de Napoleon?"
        answer="blanc"
        points={score}
        onCountScore={handleScore}
      ></Question>
      <hr />
      <div>Current Score {score}</div>
      <div className="container">
        <FourInOne></FourInOne>
      </div>

      <div className="container">
        <TimerExample start={startQuestions} onTimeEnd={handleTimeEnd} />
        <h1>Question Pour Un Champion</h1>
        <button className="btn btn-primary" onClick={toggleStartQuestions}>
          {startQuestions ? "stop game" : "start game"}
        </button>
      </div>
      <div>QUESTION</div>
      <button className="btn btn-danger" disabled={!startQuestions}>
        Passe
      </button>
    </>
  );
}

export default App;

import { useEffect, useRef, useState } from "react";
import "./question.scss";


const Question = ({ start, difficulty, theme, questions, points, onCountScore, onStartGame, onStopGame, onNextQuestion, onCheckAnswer }) => {
  const [myAnswer, setMyAnswer] = useState("");
  // const [correct, setCorrect] = useState();
  const inputAnswer = useRef(null);
  


  useEffect(() => {
    inputAnswer.current.focus();
  });

  const handleMyAnswer = (event) => {
    setMyAnswer(event.target.value);
  };

  const checkAnswer = () => {
    if (myAnswer.toLowerCase() == questions[difficulty-1].correct_answer.toLowerCase()) {
      onCountScore(points + 1);
      //setCorrect(true);
      onCheckAnswer(true);
      onNextQuestion(true)
    } else {
      //setCorrect(false);
      onCheckAnswer(false);
      onNextQuestion(true)
    }
  };

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      checkAnswer();
    }
  };

  const startGame = () => {
    onCountScore(-1)
    onStartGame(true)
  }

  const stopGame  = () => {
    onStopGame(false)
  }

  const skipQuestion = () => {
    onNextQuestion(true)
  }

  return (
    <>
      <div className={"card text-white bg-dark mt-2 " + (!start ? "" : "nonactive")}>
        <div className="card-header">
          <span className="title">
            Question Pour Un <span className="champion-text">Champion</span>
          </span>
        </div>
        <div className="card-body">
            <p className="text-dark">
              Bienvenue dans question pour un champion.
            </p>
        </div>
        <div className="card-footer">
          <button className="btn btn-lg btn-primary mt-2" onClick={startGame}>
            START
          </button>
        </div>
      </div>


      <div className={"card text-white bg-dark mt-2 " + (start ? "" : "nonactive")}>
        <div className="card-header">          
          <span className="title">
              Question Pour Un <span className="champion-text">Champion</span>
            </span>
        </div>
        <div className="card-body">
          { theme }
          <h5>{questions[difficulty-1]?.question}</h5>
          {questions[difficulty-1]?.correct_answer}
          {difficulty}
          <form>
            <div className="input-group mb-3">
              <input
                className="form-control"
                ref={inputAnswer}
                type="text"
                value={myAnswer}
                onChange={handleMyAnswer}
                placeholder="Your answer"
                onKeyDown={handleKeyDown}
              ></input>
              <button
                className="btn btn-primary"
                type="button"
                id="button-addon2"
                onClick={checkAnswer}
              >
                OK <i className="bi bi-check"></i>
              </button>
            </div>
          </form>

        </div>
        <div className="card-footer">
        <button className="btn btn-danger" onClick={skipQuestion}>
            Passe
          </button>
        <button className="btn btn-primary" onClick={stopGame}>
            STOP GAME
          </button>
        </div>
      </div>

    </>
  );
};

export default Question;

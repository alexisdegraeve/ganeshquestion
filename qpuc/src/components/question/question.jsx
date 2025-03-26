import { useEffect, useRef, useState } from "react";
import "./question.scss";

const Question = ({
  start,
  difficulty,
  theme,
  questions,
  points,
  onCountScore,
  onStopGame,
  onNextQuestion,
  onCheckAnswer,
}) => {
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
    if (
      myAnswer.toLowerCase() ==
      questions[difficulty - 1].correct_answer.toLowerCase()
    ) {
      onCountScore(points + 1);
      //setCorrect(true);
      onCheckAnswer(true);
      onNextQuestion(true);
    } else {
      //setCorrect(false);
      onCheckAnswer(false);
      onNextQuestion(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      checkAnswer();
    }
  };

  // const startGame = () => {
  //   onCountScore(-1)
  //   setMyAnswer('')
  //   onStartGame(true)
  // }

  const stopGame = () => {
    setMyAnswer("");
    onStopGame(false);
  };

  const skipQuestion = () => {
    setMyAnswer("");
    onNextQuestion(true);
  };

  return (
    <>
      <div
        className={"card text-white bg-dark mt-2 " + (start ? "" : "nonactive")}
      >
        <div className="card-header">
          <span className="title">
            Question Pour Un <span className="champion-text">Champion</span>
          </span>
        </div>
        <div className="card-body">
          <span className="theme">{theme}</span>
          <h5>{questions[difficulty - 1]?.question}</h5>
          <form>
            <div className="input-group mb-3">
              <input
                className="form-control"
                ref={inputAnswer}
                type="text"
                value={myAnswer}
                onChange={handleMyAnswer}
                placeholder="Votre réponse"
                onKeyDown={handleKeyDown}
              ></input>
              <button
                className="btn btn-lg btn-success d-flex justify-content-center align-items-center"
                type="button"
                id="button-addon2"
                onClick={checkAnswer}
              >
                <i className="bi bi-check fs-3"></i> OK
              </button>
            </div>
          </form>
        </div>
        <div className="card-footer d-flex">
          <button
            className="btn btn-lg btn-secondary mt-2 d-flex justify-content-center align-items-center"
            onClick={skipQuestion}
          >
            <i class="bi bi-skip-forward fs-2"></i><span className="ms-2"> PASSE</span>
          </button>
          <button
            className="btn btn-lg btn-danger mt-2 d-flex justify-content-center align-items-center ms-auto"
            onClick={stopGame}
          >
            <i class="bi bi-stop fs-2"></i> <span className="ms-2"> STOP</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Question;

import { useEffect, useRef, useState } from "react";
import "./question.scss";

const Question = ({ start, question, answer, points, onCountScore, onStartGame, onStopGame, onNextQuestion }) => {
  const [myAnswer, setMyAnswer] = useState("");
  const [correct, setCorrect] = useState();
  const inputAnswer = useRef(null);


  useEffect(() => {
    inputAnswer.current.focus();
  });

  const handleMyAnswer = (event) => {
    setMyAnswer(event.target.value);
  };

  const checkAnswer = () => {
    if (myAnswer.toLowerCase() == answer.toLowerCase()) {
      onCountScore(points + 1);
      setCorrect(true);
      nextQuestion()
    } else {
      setCorrect(false);
      nextQuestion()
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

  const nextQuestion = () => {
    onNextQuestion(true)
    setMyAnswer('')
  }

  const skipQuestion = () => {
    nextQuestion()
  }

  return (
    <>
      <div className="questioncard">
        <div className={"frontcard " + (!start ? "" : "nonactive")}>
          <span className="champion-text text-center">Question Pour Un <br />Champion</span>
          <button className="btn btn-primary mt-2" onClick={startGame}>
                START
          </button>
        </div>

        <div className={"backcard " + (start ? "" : "nonactive")}>
          <h5>{question}</h5>
          <button className="btn btn-primary" onClick={stopGame}>
                STOP GAME
          </button>
          {answer}
          {points}
          <form>
            <div class="input-group mb-3">
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
                OK <i class="bi bi-check"></i>
              </button>
            </div>
          </form>
          {correct ? (
            <div class="alert alert-success" role="alert">
              YOUR ANSWER IS CORRECT
            </div>
          ) : (
            <div class="alert alert-warning" role="alert">
              YOUR ANSWER IS NOT CORRECT
            </div>
          )}

          <br />
          <button className="btn btn-danger"  onClick={skipQuestion}>Passe</button>
        </div>
      </div>
    </>
  );
};

export default Question;

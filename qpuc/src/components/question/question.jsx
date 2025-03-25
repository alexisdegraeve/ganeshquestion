import { useEffect, useRef, useState } from "react";
import "./question.scss";


const Question = ({ start, difficulty, theme, questions, points, onCountScore, onStartGame, onStopGame, onNextQuestion }) => {
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
    if (myAnswer.toLowerCase() == questions[difficulty-1].correct_answer.toLowerCase()) {
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
      <div className={"card text-white bg-dark mt-2 " + (!start ? "" : "nonactive")}>
        <div class="card-header">
          <span className="title">
            Question Pour Un <span className="champion-text">Champion</span>
          </span>
        </div>
        <div class="card-body">
            <p className="text-dark">
              Bienvenue dans question pour un champion.
            </p>
        </div>
        <div class="card-footer">
          <button className="btn btn-lg btn-primary mt-2" onClick={startGame}>
            START
          </button>
        </div>
      </div>


      <div className={"card text-white bg-dark mt-2 " + (start ? "" : "nonactive")}>
        <div class="card-header">          
          <span className="title">
              Question Pour Un <span className="champion-text">Champion</span>
            </span>
        </div>
        <div class="card-body">
          { theme }
          <h5>{questions[difficulty]?.question}</h5>
          {questions[difficulty]?.correct_answer}
          {difficulty}
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
        </div>
        <div class="card-footer">
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

import { useEffect, useRef, useState } from "react";
import "./question.scss";

const Question = ({ showFront, question, answer, points, onCountScore }) => {
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
      onCountScore(points + 3);
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      checkAnswer();
    }
  };

  return (
    <>
      <div className="questioncard">
        <div className={"frontcard " + (showFront ? "" : "nonactive")}>
          AVANT
          <span className="champion-text">Champion</span>
        </div>

        <div className={"backcard " + (!showFront ? "" : "nonactive")}>
          <h5>{question}</h5>
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
          <button className="btn btn-danger">Passe</button>
        </div>
      </div>
    </>
  );
};

export default Question;

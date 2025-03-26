import "./lose.scss";

const LoseCard = ({ onRestartGame }) => {
  return (
    <div className="lose-card">
      <div className="card text-white bg-dark mt-2">
        <div className="card-header">
          <span className="title">
            Question Pour Un <span className="champion-text">Champion</span>
          </span>
        </div>
        <div className="card-body text-center">
          <div className="bubbles-line pb-4">
            {Array.from({ length: 10 }, (_, i) => (
              <div className="bubble"></div>
            ))}
          </div>
          <h1 className="lose-text">
            You Lose! &nbsp; <i className="bi bi-emoji-frown"></i>
          </h1>
          <p className="text-center"> Désolé, vous avez perdu! </p>
          <div className="bubbles-line pt-2">
            {Array.from({ length: 10 }, (_, i) => (
              <div className="bubble"></div>
            ))}
          </div>
        </div>
        <div className="card-footer d-flex">
          <button
            className="btn btn-sm btn-lg btn-danger mt-2 d-flex justify-content-center align-items-center"
            onClick={onRestartGame}
          >
            <i className="bi bi-play fs-2"></i> <span>RECOMMENCER</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoseCard;

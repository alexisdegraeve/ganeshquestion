import './lose.scss';

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
          <div className="sad-face">
            <h1 className="lose-text">
              Désolé, vous avez perdu! <i className="bi bi-emoji-frown"></i>
            </h1>
          </div>
          <p className="text-dark">Mieux vaut essayer à nouveau!</p>
        </div>
        <div className="card-footer text-center">
          <button className="btn btn-lg btn-primary mt-2" onClick={onRestartGame}>
            RECOMMENCER
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoseCard;

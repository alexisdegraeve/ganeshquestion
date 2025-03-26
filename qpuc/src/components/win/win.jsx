import './win.scss'

const WinCard = ({onRestartGame}) => {
    return (
        <div className="card text-white bg-dark mt-2 ">
        <div className="card-header">
          <span className="title">
            Question Pour Un <span className="champion-text">Champion</span>
          </span>
        </div>
        <div className="card-body">
            <p className="text-dark">
              Bravo vous avez gagné
            </p>
        </div>
        <div className="card-footer">
          <button className="btn btn-lg btn-primary mt-2" onClick={onRestartGame}>
            RECOMMENCER
          </button>
        </div>
      </div>
    )

}

export default WinCard
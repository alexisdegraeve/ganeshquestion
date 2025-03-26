import "./start.scss";

const StartCard = ({ onStartGame }) => {
  return (
    <div className={"card text-white bg-dark mt-2 "}>
      <div className="card-header">
        <span className="title">
          Question Pour Un <span className="champion-text">Champion</span>
        </span>
      </div>
      <div className="card-body">
        <h4>Bienvenue dans "4 à la suite" !</h4>
        <p>
          Dans ce jeu, vous devez répondre à <strong>4 questions</strong> sur un thème donné.
          Vous avez seulement <strong>60 secondes</strong> pour répondre aux 4
          questions.
        </p>
        <p>
          À chaque question, vous devrez entrer votre réponse au clavier dans le
          champ prévu à cet effet et la valider en appuyant sur le bouton
          "Valider". Si vous ne connaissez pas la réponse, vous avez l'option de
          cliquer sur "Passe" pour passer à la question suivante. Mais
          attention, chaque seconde compte !
        </p>
        <p>
          <h6>Règles du jeu :</h6>
        </p>
        <ul>
          <li>Vous avez 60 secondes pour répondre aux 4 questions.</li>
          <li>
            Pour répondre à une question, tapez votre réponse dans le champ et
            cliquez sur "Valider".
          </li>
          <li>
            Si vous ne connaissez pas la réponse, vous pouvez cliquer sur
            "Passe" pour passer à la question suivante, mais cela ne rapporte
            aucun point.
          </li>
          <li>
            Le temps est limité, alors soyez rapide ! Le chronomètre décompte le
            temps restant.
          </li>
        </ul>
        <p>Bonne chance, et n'oubliez pas : chaque seconde compte !</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-lg btn-danger mt-2 d-flex justify-content-center align-items-center" onClick={onStartGame}>
          <i class="bi bi-play fs-2"></i> <span>START</span> 
        </button>
      </div>
    </div>
  );
};

export default StartCard;

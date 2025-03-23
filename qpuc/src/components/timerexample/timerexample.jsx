import React, { useState, useEffect } from 'react';
const TimerExample = () => {
    const [timeLeft, setTimeLeft] = useState(10); // Temps initial de 10 secondes
    const [message, setMessage] = useState('');
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer); // Arrêter le timer quand le temps est écoulé
            setMessage('Le temps est écoulé !');
            return 0; // Ne pas descendre en dessous de 0
          }
          return prevTime - 1; // Décrémenter le temps restant
        });
      }, 1000); // 1000ms = 1 seconde
  
      // Nettoyage du timer quand le composant est démonté
      return () => clearInterval(timer);
    }, []); // [] signifie que l'effet se lance une seule fois (au démarrage du composant)
  
    return (
      <div>
        <h1>Compte à rebours</h1>
        <p>Temps restant : {timeLeft} secondes</p>
        <p>{message}</p>
      </div>
    );
  };

  export default TimerExample;
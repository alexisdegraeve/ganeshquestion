import React, { useState, useEffect, useRef } from 'react';

const TimerExample = ({ start, onTimeEnd }) => {
  const [timeLeft, setTimeLeft] = useState(10);
  const [message, setMessage] = useState('');
  const timerRef = useRef(null); // Stocke la référence du timer

  useEffect(() => {
    console.log("La prop 'start' a changé :", start);

    if (!start) {
      clearInterval(timerRef.current); // Stoppe le timer si `start` est false
      timerRef.current = null;
      setTimeLeft(10); // Reset le temps
      setMessage('');
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerRef.current); // Stoppe le timer quand le temps est écoulé
          timerRef.current = null;
          setMessage('Le temps est écoulé !');
          onTimeEnd()
          return 0;
        }
        return prevTime - 1; // Décrémente
      });
    }, 1000);

    // Nettoyage quand `start` change ou le composant est démonté
    return () => clearInterval(timerRef.current);
  }, [start]); // Dépendance sur `start`

  return (
    <div>
      <h1>Compte à rebours</h1>
      <p>Temps restant : {timeLeft} secondes</p>
      <p>{message}</p>
    </div>
  );
};

export default TimerExample;

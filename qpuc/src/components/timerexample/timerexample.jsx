import React, { useState, useEffect, useRef } from 'react';
import Stage from '../stage/stage';

const TimerExample = ({ start, onTimeEnd }) => {
  const [timeLeft, setTimeLeft] = useState(40);
  const timerRef = useRef(null); // Stocke la référence du timer

  useEffect(() => {
    console.log("La prop 'start' a changé :", start);

    if (!start) {
      clearInterval(timerRef.current); // Stoppe le timer si `start` est false
      timerRef.current = null;
      setTimeLeft(40); // Reset le temps
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerRef.current); // Stoppe le timer quand le temps est écoulé
          timerRef.current = null;
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
      <Stage level={timeLeft}>{ {timeLeft}}</Stage>
    </div>
  );
};

export default TimerExample;

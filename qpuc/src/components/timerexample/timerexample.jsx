import React, { useState, useEffect } from 'react';
const TimerExample = ({start}) => {
    const [timeLeft, setTimeLeft] = useState(10); // Temps initial de 10 secondes
    const [message, setMessage] = useState('');
  
    useEffect(() => {
      console.log("La prop 'start' a changé :", start);
      let timer
      if(!start) {
        clearInterval(timer);
        console.log('TIMER PAS Dermarrer');
        setTimeLeft(10); // RESET
      }
      if(start) {
        timer = setInterval(() => {
          console.log('TIMER ', timer)
          setTimeLeft((prevTime) => {
            if (prevTime <= 1) {
              clearInterval(timer); // Arrêter le timer quand le temps est écoulé
              setMessage('Le temps est écoulé !');
              console.log('Timer oui ', prevTime)
              return 0; // Ne pas descendre en dessous de 0
            }
            return prevTime - 1; // Décrémenter le temps restant
          });
        }, 1000); // 1000ms = 1 seconde
    
        // Nettoyage du timer quand le composant est démonté
        return () => clearInterval(timer);
      } 

    }, [start]); // [] signifie que l'effet se lance une seule fois (au démarrage du composant)
  
    return (
      <div>
        <h1>Compte à rebours</h1>
        <p>Temps restant : {timeLeft} secondes</p>
        <p>{message}</p>
      </div>
    );
  };

  export default TimerExample;
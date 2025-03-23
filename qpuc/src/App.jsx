import { useState } from 'react'
import './App.scss'
import TimerExample from './components/timerexample/timerexample' 
import FourInOne from './components/fourinone/fourinone'

function App() {
  const [count, setCount] = useState(0)
  const [startQuestions, setStartQuestions] = useState(false)

  const toggleStartQuestions = () => {
    setStartQuestions((prevStart) => ! prevStart);
  }

  const handleTimeEnd = () => {
    console.log("Le timer est terminé !");
    setStartQuestions(false); // On arrête le timer après expiration
  };

  return (
    <>
      <div className="container">
            <FourInOne></FourInOne>
      </div>

      <div className="container">
        <TimerExample start={startQuestions} onTimeEnd={handleTimeEnd}  /> 
        <h1>Question Pour Un Champion</h1>
        <button className="btn btn-primary" onClick={toggleStartQuestions}>
             { startQuestions ? 'stop game' : 'start game' }
        </button>
      </div>
      <div>
        QUESTION
      </div>
      <button className="btn btn-danger" disabled={!startQuestions}>
        Passe
      </button>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

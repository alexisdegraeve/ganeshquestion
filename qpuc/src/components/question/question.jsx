import { useEffect, useRef, useState } from 'react'
import './question.scss'

const Question = ({showFront, question, answer, points, onCountScore}) => {
    const [myAnswer, setMyAnswer] = useState('');
    const [correct, setCorrect] = useState();
    const inputAnswer = useRef(null)

    useEffect (() => {
        inputAnswer.current.focus();
    })

    const handleMyAnswer = (event) => {
        setMyAnswer(event.target.value)
    }

    const checkAnswer = () => {
            if(myAnswer.toLowerCase() == answer.toLowerCase()) {
                onCountScore(points + 3)
                setCorrect(true);
            } else {
                setCorrect(false);
            }
    }

    const handleKeyDown = (e) => {
        if (e.key ==  "Enter") {
            checkAnswer()
        }
    }


    return (<>
            <div className="questioncard">
                <div className ={'frontcard '+ (showFront ? '' : 'nonactive')}>
                    AVANT
                    <span className="champion-text">Champion</span>
                </div>

                <div className ={'backcard '+ (!showFront ? '' : 'nonactive')}>
                    ARRIERE
                    {question}
                    {answer}
                    {points}
                    <input ref={inputAnswer} type="text" value={myAnswer} onChange={handleMyAnswer} placeholder='Your answer' onKeyDown={handleKeyDown}></input>
                    <button className="btn btn-primary" onClick={checkAnswer}>
                        VALID!
                    </button>
                    YOUR ANSWER IS CORRECT { correct ? 'YES ' : 'NO'}
                    <br />
                </div>
            </div>
    </>);
}

export default Question
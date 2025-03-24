import { useState } from 'react'
import './question.scss'

const Question = ({showFront, question, answer, points}) => {
    const [myAnswer, setMyAnswer] = useState('');
    const [correct, setCorrect] = useState();

    const handleMyAnswer = (event) => {
        setMyAnswer(event.target.value)
    }

    const checkAnswer = () => {
            if(myAnswer == answer) {
                setCorrect(true);
            } else {
                setCorrect(false);
            }
    }

    return (<>
            <div class="questioncard">
                <div class="frontcard " className={showFront ? 'visible' : 'invisible'}>
                    AVANT
                </div>

                <div class="backcard " className={!showFront ? 'visible' : 'invisible'}>
                    ARRIERE
                    {question}
                    {answer}
                    {points}
                    <input type="text" value={myAnswer} onChange={handleMyAnswer} placeholder='Your answer'></input>
                    <button class="btn btn-primary" onClick={checkAnswer}>
                        VALID!
                    </button>
                    YOUR ANSWER IS CORRECT { correct ? 'YES ' : 'NO'}
                    <br />
                </div>
            </div>
    </>);
}

export default Question
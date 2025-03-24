import './question.scss'

const Question = ({showFront, question, answer, points}) => {

    const checkAnswer = (myAnswer) => {
            if(myAnswer == answer) {
                return true
            } else {
                return false
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
                    <input></input>
                    <button class="btn btn-primary" onClick={checkAnswer()}>
                        VALID!
                    </button>
                </div>
            </div>
    </>);
}

export default Question
import React from 'react';

const Result = ({score, playAgain}) => (
    <div className="score-board">
        <div className="score">You scored {score} / 5 correct answers!</div>
        <button className="playBtn" onClick={()=>playAgain()}>
            Play again!
        </button>
        <div className="heading">Correct Answers</div>
    </div>
    
)

export default Result;
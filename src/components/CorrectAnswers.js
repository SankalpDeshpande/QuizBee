import React from 'react';
import Button from '@material-ui/core/Button';

const CorrectAnswers = ({question, correct, index}) => (
    <div className="questionBox">
        <div className="question">{index +1}){question} </div>
        <Button variant="contained" color="secondary">{correct}</Button>
    </div>
    
)

export default CorrectAnswers;
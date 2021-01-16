import React from 'react';
import Button from '@material-ui/core/Button';

const CorrectAnswers = ({question, correct, index}) => (
    <div className="questionBox">
        <div className="question">{index +1}){question} </div>
        <Button variant="contained" style={{backgroundColor: "#d1e189"}}>{correct}</Button>
    </div>
    
)

export default CorrectAnswers;
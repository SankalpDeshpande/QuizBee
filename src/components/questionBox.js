import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const QuestionBox = ({question, options, selected, index, onClickUndo}) => {
    const [answer, setAnswer] = useState(options);
    const [isAnswered, toggleIsAnswered] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState("temp");
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            backgroundColor:  "#33FFBD"
          },
        }
      }));
    const classes = useStyles();
    return (
        <div className="questionBox">
            <div className="question">
            {index +1}){question}
            </div>
            
            <div className={classes.root}>
                {
                !isAnswered && answer.map((text, index) =>
                
                    <Button variant="contained" key={index} onClick={() => {
                        setAnswer([text]);
                        selected(text);
                        toggleIsAnswered(true);
                        setCorrectAnswer(text);
                    }}>{text}</Button>
                    
                    
                )}
                
                

                </div>
                
                {isAnswered && <Button variant="contained" color="secondary">{correctAnswer}</Button>}
                {isAnswered && <Button variant="contained" color="secondary" class="undoButton" onClick={() => {
                    setAnswer(options);
                    toggleIsAnswered(false);
                    onClickUndo(answer[0]);
                    }}>Undo</Button>}
                
                
        </div>
    )
}

export default QuestionBox;
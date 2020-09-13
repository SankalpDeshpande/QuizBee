import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './assets/style.css';
import quizService from './quizService/index';
import QuestionBox from './components/questionBox';
import Result from './components/result';
import CorrectAnswers from './components/CorrectAnswers';

class QuizBee extends Component {
    state = {
        questionBank : [],
        score : 0,
        responses : 0
    };
    getQuestions = () => {
        quizService().then(question => {
            this.setState({
                questionBank: question
            })
        })
    }
    playAgain = () =>{
        this.getQuestions();
        this.setState({
            score :0,
            responses: 0
        });
    }
    computeAnswer=(answer,correct)=>{
        if(answer === correct){
            this.setState({
                score : this.state.score +1
            })
        }
        this.setState({
            responses : this.state.responses < 5 ? this.state.responses + 1 : 5
        })
    }
    onClickUndo=(answer,correct)=>{
        if(answer === correct){
            this.setState({
                score : this.state.score - 1
            })
        }
        this.setState({
            responses : this.state.responses - 1
        })
    }
    componentDidMount(){
        this.getQuestions();
    }
    render() {
        return (
            <div className="container">
                <div className="title">
                    QuizBee
             </div>
                {this.state.questionBank.length > 0 &&
                    this.state.responses < 5 &&
                    this.state.questionBank.map(({ question, answers, correct, questionId }, index) =>
                        (<QuestionBox question={question} options={answers} index={index} key={questionId} selected={answer => this.computeAnswer(answer, correct)}
                            onClickUndo={answer => this.onClickUndo(answer, correct)} />)
                    )}
                {this.state.responses === 5 ? <Result score={this.state.score} playAgain={this.playAgain} /> : null}
                {this.state.responses === 5 ?
                    this.state.questionBank.map(({ question, correct }, index) =>
                        (
                        <CorrectAnswers question={question} correct={correct} index={index} />)
                    ) : null}
            </div>
        );
    }
}

ReactDOM.render(<QuizBee/>, document.getElementById("root"));
import React from "react"
import Question from "./Question"
export default function Questions(props){
    console.log(props.answers)
    const questionDiv=props.questions.map((question)=> <Question update={props.update} {...question} answer={props.answers.filter((x)=>x.id===question.id)} state={props.state}/>)
    return (
        <div>
            <h1>Questions</h1>
            {questionDiv}
            {props.state===1 &&<button className="button" onClick={props.changeState}>Check Answer</button>}
            {props.state===2 && <h3>You got {props.totalScore}/{props.questions.length}</h3>}
            {props.state===2 &&<button className="button" onClick={props.changeState}>Play Again</button>}
        </div>
    )
}
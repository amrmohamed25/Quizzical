import React from "react"

export default function Question(props){
    //moshkla w ana b7sb total correct w wrong howa by3dl fe state gyalo
    // const availableAnswers=props.incorrect_answers
    console.log(props.answer)
    console.log(props.answer[0].data)
    // if(props.state===2){
    //     if(x===props.answer[0].data){
    //         if(x.correct_answer===x){
    //             "green"
    //         }else{
    //             "red"
    //         }
    //     }else{
    //         "white"
    //     }
    // }else{
    //     if(props.answer[0].data===x)
    //     "d6"
    //     else 
    //     "white"
    // }
    // props.state===2?props.answer[0].data===x?x.correct_answer==x?"green":"red":"white":props.answer[0].data===x?"#D6DBF5":"white"
    const answersDivs=props.available_answers.map(x=><button className="answerDiv" style={{
        backgroundColor:props.state===2?
        x===props.correct_answer?"green":props.answer[0].data===x?
        props.correct_answer===x?"green":"red":"white"
    :props.answer[0].data===x?"#D6DBF5":"white",color:props.state===2?
    x===props.correct_answer?"white":props.answer[0].data===x?
    props.correct_answer===x?"white":"white":"black"
:props.answer[0].data===x?"black":"black"}} onClick={props.state===1?()=>props.update(props.id,x):()=>{}}>{x}</button>)
    // console.log(availableAnswers)
    return (
        <div className="question-div">
            <h4 className="question-title">{props.question}</h4>
            <div className="answers-div">
             {answersDivs}
            </div>
            <hr style={{width:"500px"}}/>
        </div>
    )
}
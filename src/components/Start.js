import React from "react"

export default function Start(props){
    return (
        <div className="start-div">
            <h1>Quizzical</h1>
            <h3>Some description if needed</h3>
            <br/>
            <button className="button" onClick={props.start}>Start quiz</button>
        </div>
    )
}
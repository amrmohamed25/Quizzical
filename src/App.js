import React from "react"
import Start from "./components/Start"
import Questions from "./components/Questions";
import {nanoid} from "nanoid"
function App() {
  const [quizState, setQuizState] = React.useState(0)
  const [newGame,setGame] = React.useState(0)
  function startQuiz(myState) {
    if(myState===2){
      checkAnswers()
    }
    setQuizState((x)=>{
      
      if(x==0){

      }
      else if(x==2){
        setGame(x=>!x)
      }
      return myState
    })
    
  }
  const [questions, setQuestions] = React.useState([])
  const [answers, setAnswers] = React.useState([])
  console.log(questions)
  console.log(answers)
  const [score,setScore]=React.useState(0)
  function updateAnswer(id,value){
    console.log(value)
    for(let i=0;i<questions.length;i++){
      if(questions[i].id===id){
        console.log("aho")
        setAnswers((prev)=>prev.map(x=>{
          console.log(x.id===id)
          return x.id===id?{...x,data:value}:x}))
        break
      }
    }

  }
  console.log(score)
  function checkAnswers(){
    let totalScore=0
    for(let i=0;i<questions.length;i++)
    {
      if(questions[i].correct_answer===answers[i].data){
        totalScore+=1
      }
    }
    setScore(totalScore)
  }

  React.useEffect(() => {
    async function getAPIData() {
      const response = await fetch("https://opentdb.com/api.php?amount=10&encode=url3986")
      const data = await response.json()
      console.log(data.results)
      // data
      let newData = []
      for (let i = 0; i < data.results.length; i++) {
        let tempList = data.results[i].incorrect_answers.map(x=>decodeURIComponent(x))
        let ran = Math.ceil(Math.random() * data.results[i].incorrect_answers.length)
        console.log(ran)
        tempList.splice(ran, 0, decodeURIComponent(data.results[i].correct_answer))
        let temp={
          question:decodeURIComponent(data.results[i].question),
          category:decodeURIComponent(data.results[i].category),
          correct_answer:decodeURIComponent(data.results[i].correct_answer),
          incorrect_answers:decodeURIComponent(data.results[i].incorrect_answers),
          available_answers: tempList
        }
        newData.push({ ...temp, id:nanoid() })
      }
      console.log(newData[0].id)
      setQuestions(newData)
      let temp=[]
      for(let i=0;i<newData.length;i++){
        temp.push({id:newData[i].id,data:""})
      }
      setAnswers(temp)
      return 
    }
    getAPIData();
  }, [newGame])

  return (
    <>
      <span className="bubble down"></span>
      <span className="bubble up"></span>
      <div className="main">

        {quizState === 0 && <Start start={() => startQuiz(1)} />}
        {quizState === 1 && <Questions questions={questions} update={updateAnswer} answers={answers} state={quizState} changeState={() => startQuiz(2)} />}
        {quizState === 2 && <Questions questions={questions} update={updateAnswer} answers={answers} state={quizState} changeState={() => startQuiz(1)} totalScore={score}/>}
      </div>
    </>
  )
}

export default App;


import React from 'react';
import './App.css';
import Ques from "./Ques"
const short = require('short-uuid');
export default function App() {
  const [allQues, setAllQues] = React.useState([]);

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple")
         .then((res) => res.json())
         .then((data) => {
           let filteredData = data.results.map((oneQues) => (
            {
              question: oneQues.question,
              correct_answer: oneQues.correct_answer,
              incorrect_answers: oneQues.incorrect_answers,
              id: short.generate(),
              answered: false
            }
           ))
          
          
          setAllQues(filteredData)
        
        })
  },[])
 

 function handleAnsClick(id){
       let foundObj = allQues.find(obj => obj.id===id)
       foundObj.answered= true;
       console.log(foundObj.id)
 }
 
  const quesElements =  allQues.map((obj) => (
        <Ques
        key={obj.id} 
        question= {obj.question}
        correct_answer= {obj.correct_answer}
        incorrect_answers= {obj.incorrect_answers}
        id= {obj.id}
        handleAnsClick= {() => handleAnsClick(obj.id)}
        />
  ))

  return(
    <div className="ques-cont">
      <div>{quesElements}</div>
      <button className='submit'>Check Answers</button>
    </div>
  )
}




import React from 'react';
import './App.css';
import Ques from "./Ques"
const short = require('short-uuid');
export default function App() {
  const [allQues, setAllQues] = React.useState([]);
  const [ans, updateAns] = React.useState(0)

  function setOptions(correct_answer ,incorrect_answers){
     let random = Math.floor(Math.random() * incorrect_answers.length)
     incorrect_answers.splice(random, 0, correct_answer);
     let optionsObj = incorrect_answers.map((val) => ({
        option: val,
        oid: short.generate(),
        isSelected: false
     }))

     return optionsObj;
  }

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
              answered: false,
              optionsObj: setOptions(oneQues.correct_answer, oneQues.incorrect_answers)
            }
           ))
          
           
          setAllQues(filteredData)
        
        })
  },[])
 
 
 function handleAnsClick(id){
       let foundObj = allQues.find(obj => obj.id===id)
       foundObj.answered= true;
       foundObj.optionsObj.isSelected = true;
       console.log(allQues[1].optionsObj)
       updateAns((oldans) => oldans+1)
 }
 
  const quesElements =  allQues.map((obj) => (
        <Ques
        key={obj.id} 
        question= {obj.question}
        correct_answer= {obj.correct_answer}
        incorrect_answers= {obj.incorrect_answers}
        id= {obj.id}
        handleAnsClick= {() => handleAnsClick(obj.id)}
        optionsObj= {obj.optionsObj}
        />
  ))

  return(
    <div className="ques-cont">
      <div>{quesElements}</div>
      <button className='submit'>Check Answers</button>
    </div>
  )
}



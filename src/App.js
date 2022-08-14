
import React from 'react';
import './App.css';
import Ques from "./Ques"

export default function App() {
  const [allQues, setAllQues] = React.useState([]);

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple")
         .then((res) => res.json())
         .then((data) => setAllQues(data.results))
  },[])
 
  const quesElements =  allQues.map((obj) => (
        <Ques quesObj={obj}/>
  ))

  return(
    <div className="ques-cont">
      <div>{quesElements}</div>
      <button className='submit'>Check Answers</button>
    </div>
  )
}



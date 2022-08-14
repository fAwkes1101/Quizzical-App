import React from "react";

export default function Ques(props){
    
    let statement = props.quesObj.question;
    let inAns = props.quesObj.incorrect_answers;
    let coAns = props.quesObj.correct_answer;
    inAns.push(coAns)
    
    function handleOptClick(e){
        e.style.backgroundColor = "green"
    }

    let btns = inAns.map((opt)=> (
        <button onClick={handleOptClick}>{opt}</button>
    ))
    return(
        <div className="ques--set">
            <p >{statement}</p>
            <div className="options">
               {btns}
            </div>
        </div>
    )
}

// {
//     "category": "Science: Computers",
//     "type": "multiple",
//     "difficulty": "easy",
//     "question": "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
//     "correct_answer": "1000",
//     "incorrect_answers": [
//     "512",
//     "1024",
//     "500"
//     ]
//     }
//Math.floor(Math.random()* inAns.length)
//arr.insert(index, item)
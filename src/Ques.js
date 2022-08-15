import React from "react";

export default function Ques(props){
    
    let statement = props.question;
    let inAns = props.incorrect_answers;
    let coAns = props.correct_answer;
    inAns.push(coAns)
    
    let styles = {
        backgroundColor: 'green' 
    }
    
    let btns = inAns.map((opt) => {
       
       return (<button 
               style={styles}
               onClick={props.handleAnsClick} 
               >{opt}
               
               </button>
    )})
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
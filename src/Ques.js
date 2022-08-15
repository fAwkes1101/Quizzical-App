import React from "react";

export default function Ques(props){
    

    let statement = props.question;
    let inAns = props.incorrect_answers;
    let coAns = props.correct_answer;
    
    
    let styles = {
        backgroundColor: 'white'
    }
    

    let btns = props.optionsObj.map((optionObj) => {
        let styles = {
            backgroundColor: optionObj.isSelected? 'green' : 'white'
        }
        
       return (<button 
               style={styles}
               onClick={props.handleAnsClick}
               oid = {optionObj.oid}
               isSelected = {optionObj.isSelected}
               >
               {optionObj.option}

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
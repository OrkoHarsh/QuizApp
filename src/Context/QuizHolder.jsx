import React, { useState } from 'react'
import { createContext } from 'react'
import { data } from '../data';
const QuizContext = createContext();

const quizzes=data;


export default function QuizHolder(props){
  const [start,setStart]=useState(false);
  const [exit,setExit]=useState(false);

  const [correct,setCorrect]=useState(0);
  
  
  return (
    <QuizContext.Provider value={{
      start,exit,setExit,setStart, quizzes, correct,setCorrect
    }}>
      {props.children}
    </QuizContext.Provider>

  )
} 

export { QuizContext}
import React from 'react'
import Quiz from '../Components/Quiz';
import Result from '../Components/Result';
import Start from '../Components/Start';
import { QuizContext } from '../Context/QuizHolder';
import { useContext } from 'react';



const QuizPage = () => {
  const {start,exit}=useContext(QuizContext);
  return (
    <>
    {
      exit === false
      ?
      <>
      {
        
        start === true
        ?
        <Quiz/>
        :
        <Start/>

      }
      </>

      :
      <Result/>
    } 
       
    </>
  )
}

export default QuizPage
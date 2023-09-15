import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder'
const Result = () => {
  const {setStart,setExit,correct,quizzes}=useContext(QuizContext);
  const playAgain = ()=>{
    setExit(false);
    setStart(false);
  }
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-[40%] p-8 border shadow-2xl rounded-md overflow-hidden text-center'>
        <h2 className='text-2xl p-3 my-2'>{correct} are correct out of { quizzes.length }</h2>
        <button onClick={playAgain} className='border border-orange-300  bg-orange-400 text-white p-2 transform hover:scale-110  text-2xl rounded-xl'>Quiz Page</button>
      </div>
    </div>
    )
}

export default Result
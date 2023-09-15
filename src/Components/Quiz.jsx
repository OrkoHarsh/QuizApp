import React, { useContext, useState } from 'react'
import {  QuizContext } from '../Context/QuizHolder';

const Quiz = () => {
 
  const [current,setCurrent]=useState(0);

  return (
    <div className='w-full h-screen flex justify-center items-center'>
     
      <Box current={current} next={setCurrent}/>
    </div>
  )
}

export default Quiz



const Box =({current, next})=>{

  const {quizzes,correct,setCorrect,setExit} = useContext(QuizContext);
  // console.log(quizzes[current])

  const [ans,setAns]=useState("");
  
  const saveHandler=()=>{
    if(quizzes[current].correct === ans){
      setCorrect( correct+1 );
    }
    setAns("");
    if ((current+1) === quizzes.length){
      setExit(true)
    }
    next(current+1);
  }
  return(
    <div className='w-[60%] min-h-[300px] border shadow-2xl p-9 rounded-xl overflow-hidden'>
      <div className='p-2 text-3xl'>{current+1}.{quizzes[current].question} </div>
      <div className='grid grid-cols-2 mt-3   gap-2 p-2'>

        <div className={`p-3 border rounded-3xl ${ans === "a" ? 'bg-blue-500 text-white':''} 
         hover:bg-blue-500 hover:text-white duration-200 cursor-pointer`} onClick={()=>setAns("a")}>{quizzes[current].a}</div>

        <div className={`p-3 border rounded-3xl ${ans === "b" ? 'bg-blue-500 text-white':''}
         hover:bg-blue-500 hover:text-white duration-200 cursor-pointer`} onClick={()=>setAns("b")}>{quizzes[current].b}</div>

        <div className={`p-3 border rounded-3xl ${ans === "c" ? 'bg-blue-500 text-white':''}
         hover:bg-blue-500 hover:text-white duration-200 cursor-pointer`} onClick={()=>setAns("c")}>{quizzes[current].c}</div>

        <div className={`p-3 border rounded-3xl ${ans === "d" ? 'bg-blue-500 text-white':''}
         hover:bg-blue-500 hover:text-white duration-200 cursor-pointer`} onClick={()=>setAns("d")}>{quizzes[current].d}</div>


      </div>

      <div className='flex justify-evenly mt-8'>
        {/* <div className='h-[40px] p-2 bg-orange-500 text-white text-1xl cursor-pointer'onClick={()=>setAns("")}>Reset</div> */}
        <div className='h-[40px] p-2 px-5 bg-green-700 text-white text-1xl  border rounded-xl cursor-pointer hover:brightness-125 duration-100' onClick={saveHandler}>Save & Next </div>
        <div className='h-[40px] p-2 px-6 bg-red-700 text-white text-1xl rounded-xl border cursor-pointer  hover:brightness-110 duration-100' onClick={()=>setExit(true)}>Exit</div>
      </div>
      

    </div>
  )
}
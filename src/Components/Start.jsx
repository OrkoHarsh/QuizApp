import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder'

const Start = () => {
  const {setStart}=useContext(QuizContext);
  return (
    <>
    
    <div
      className="w-full h-screen bg-no-repeat bg-cover bg-center "
      style={{
        backgroundImage: `url('https://file.forms.app/sitefile/how-to-create-an-online-quiz-with-formsapp-cover.jpg')`,
      }}
    >
    <div className='w-full h-screen flex justify-center items-center'>
        
        <button onClick={()=> setStart(true)}  className='border border-orange-300  bg-orange-400 text-white p-3 transform hover:scale-110  text-6xl rounded-xl'>Start</button>
        
    </div>

    </div>
    
    </>
  )
}

export default Start
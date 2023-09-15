import './App.css';

import QuizPage from './Page/QuizPage';
import QuizHolder from './Context/QuizHolder';

function App() {
  return (
    <div className="App">
      
      <QuizHolder>  
        {/* iske ander jo bhi hoga usme ham quiz ka sara data aur state use kr paegi */}
        
       <QuizPage/>     
        
      </QuizHolder>       
    </div>
  );
}

export default App;

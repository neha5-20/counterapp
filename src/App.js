import React,{useState} from 'react';
import './App.css';

const App = () =>{

  let [score,setScore] = useState(0)
  return(
    <div className="app">
      <header>
         <h1>Counter app</h1>
      </header>
      <div className="game">
         <h3>{score}</h3>
         {/* <button onClick={()=>{setScore(score+1)}}> Increment </button> */}
         <button onClick={()=> (score<25)? setScore(score+1):""}>Increment</button>
         <button onClick={()=> (score>0)? setScore(score-1):""}>Decrement</button>
         <button onClick={()=>{setScore(0)}}>Reset</button>
      </div>
       

    </div>
  )
}

export default App;

import React, { useState } from 'react';
import './App.css';
import {Scenery} from './components/Scenery'
import {Runner} from './components/running1'
import {Runner2} from './components/running2'

function App() {
  const [Speed , setSpeed] = useState(1000);
  function IncreaseSpeed(){
    if (Speed > 500){
      setSpeed(Speed - 50)
      console.log(Speed)
    }
  }

  function DecreaseSpeed() {
    if(Speed < 1000){
      setSpeed(Speed + 50)
    }else if (Speed === 1000){

    }
    
  }
  console.log(Speed)
  return (
    <div>
      <Scenery Speed={Speed}/>
      <Runner/>
      <Runner2/>
      <img className="rainy-image" src="https://i.pinimg.com/originals/62/cb/bf/62cbbf3021778f2f6db1320a261fb88b.gif" alt="rain"/>
      <button disabled={Speed < 500 ? true : false} onClick={()=>{ IncreaseSpeed()}}>Increase Speed</button>
      <button onClick={()=>{ DecreaseSpeed()}}>Decrease Speed</button>
    </div>
  );
}

export default App;

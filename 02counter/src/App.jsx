import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);
  //let counter = 15;
  const addValue = () => {
    setCounter(counter + 1);
    console.log("Value incremented");
    function increment(){
      if(counter > 19){
        alert("Value cannot exceed 20");
        setCounter(counter = 20);
        console.log("Current value", counter = 20);
      }else{
        console.log("Current Value", counter + 1);
      }
    }
    increment();
  }
  const decreaseValue = () => {
    setCounter(counter - 1);
    console.log("Value decremented");
    
    function decrement(){
      if(counter < 1){
        alert("Value cannot be negative");
        setCounter(counter = 0)
        console.log("Current value", counter = 0)
      }else{
        console.log("Current value", counter - 1);
      }
    }
    decrement();
  }
 
 

  return (
    <>
       <div>
        <h1>Project '001'</h1>
        <h2>Counter value: {counter}</h2>

        <button onClick={addValue}
        >Add value</button>
        <br/>
        <button onClick={decreaseValue}
        >Decrease value</button>
        </div> 
    </>
  )
}

export default App

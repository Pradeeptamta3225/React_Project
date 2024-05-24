import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)
  //  let counter = 5 

  const addValue = () => {
    
    // counter = counter + 1
    setCounter(counter + 1)
    console.log("Clicked", counter);
  }


const removeValue = () => {
  
  setCounter(counter - 1)
  console.log("Clicked", counter);
}


  return (
    <>
      <h1>Hi Pradeep</h1>
      <h2>counter Value : {counter} </h2>
      <button onClick={addValue}>Increase {counter}</button>
      <button onClick={removeValue}>Decrease</button>
    </>
  )
}

export default App

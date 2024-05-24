import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  //  let counter = 5 

  const addValue = () => {
    
    if (counter < 10) {
      counter = counter + 1
      setCounter(counter)
    }
  }


const removeValue = () => {
  
  if (counter > 0) {
    counter = counter - 1
    setCounter(counter)
  }
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

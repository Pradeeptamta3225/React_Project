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

      if (counter >= 10) {
        alert("You Have reaced Maximum Value")
      }
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
      <h1 className='text'>Hi Pradeep</h1>
      <h2 className='text'>counter Value : {counter} </h2>
      <button onClick={addValue}>Increase {counter}</button>
      <button onClick={removeValue}>Decrease</button>

      <h3>Maximum Value is 10</h3>
    </>
  )
}

export default App

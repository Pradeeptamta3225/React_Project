import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

let addValue = () => {
  console.log("clicked",Math.random);
  counter = counter + 1;
}

  return (
    <>
      <h1>Hi Pradeep</h1>
      <h2>counter Value : {counter}</h2>
      <button onClick={addValue}>Increase</button>
      <button>Decrease</button>
    </>
  )
}

export default App

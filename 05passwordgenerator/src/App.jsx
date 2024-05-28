import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberCheck , setNumberCheck] = useState(false)
  const [charCheck , setCharCheck] = useState(false)
  const [password, setPassword] = useState("")


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberCheck) {
      str += "0123456789"
    }

    if (charCheck) {
      str += "@!#$%^&*()_+~"
    }
  },[length, charCheck, numberCheck , setPassword])


  return (
    <>
    <h1 className='text-4xl'>Password Generator</h1>
    </>
  )
}

export default App


import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import { useEffect } from 'react'

function App() {
const [themeMode, setThemeMode] = useState("light")

const lightMode = () => {
  setThemeMode("light")
}


const darkMode = () => {
  setThemeMode("dark")
}

useEffect(() => {
  document.querySelector('html').classList.remove('ligh' , 'dark')
  document.querySelector('html').classList.remove(themeMode)
}, [themeMode]) 

  return (
   <ThemeProvider value={{ lightMode, themeMode ,darkMode}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       
                    </div>
                </div>
            </div>
      </ThemeProvider>

  )
}

export default App


import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
     <h1>React with Context API </h1>
     <Login />
     <Profile />
    </UserContextProvider>
  
  )
}

export default App

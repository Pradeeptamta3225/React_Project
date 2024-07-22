
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import Heading from './components/Heading'

function App() {
  
  return (
    <>
    <Heading />
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
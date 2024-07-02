import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './componentes/About/About'
import Layout from './Layout'
import Home from "./componentes/Home/Home"
import Contact from './componentes/Contact/Contact'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
])


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Router path="/" element={ <Layout />} >

//       <Router path= "" element= { <Home />} />
//       <Router path= "about" element= { <About />} />
//       <Router path= "contact" element= { <Contact />} />

//     </Router>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

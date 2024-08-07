import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './componentes/About/About'
import Layout from './Layout'
import Home from "./componentes/Home/Home"
import Contact from './componentes/Contact/Contact'
import User from './componentes/User/User'
import Github from './componentes/Github/Github'
// import GithubInfoLoader from './componentes/Github/GithubInfoLoader'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
       <Route path='' element={<Home />} />
       <Route path='about' element={<About />} />
       <Route path='contact' element={<Contact />} />
       <Route path='user/:userid' element={<User />} />
       <Route path='github' element={<Github />} />
       
      
       {/* <Route 
       loader={gitLoader}
       path='github'
       element= {<GithubInfoLoader />} /> */}
    </Route>

  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

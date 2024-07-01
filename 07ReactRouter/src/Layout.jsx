
import Header from "./componentes/Header/Header"
import Footer from "./componentes/Footer/Footer"
import { Outlet } from "react-router-dom"

export default  function Layout(){

    return(
        <>
       <Header />
    <Outlet />
       <Footer />
        </>
    )
}
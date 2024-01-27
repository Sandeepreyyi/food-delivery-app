import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Routers from '../routes/Routers'
const Layout = () => {
  return (
    <div>
        <Header/>
        <div >
            <Routers/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout
import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom';


function layout() {
  return (
    <div>
      <Header/>
      <Footer/>
      <Outlet/>
    </div>
  )
}

export default layout

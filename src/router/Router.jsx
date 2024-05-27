import React from 'react'
import './Router.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../page/Dashboard'
import Navbar from '../components/navbar/Navbar'
import Leftbar from '../components/leftbar/Leftbar'
const Router = () => {
  return (
    <div className='router'>
        <Navbar/>
        <Leftbar/>
        <div className="mainRouter">
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
        </Routes>
        </div>
    </div>
  )
}

export default Router
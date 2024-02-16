import React from 'react'
import { AiOutlineMenuFold } from "react-icons/ai";
import { MdOutlineNightlight } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { PiTranslateFill } from "react-icons/pi";
import Dashboard from './Sidebar/SidebarDashboard'
import Sidebar from './Sidebar/Sidebars'
import Navbar from './Component/Navbar'
import './Component/Navbar.css'

const App = () => {
  return (
    <>
    <div className="main">
    <div>
      <AiOutlineMenuFold/>
    </div>
    <div>
       <MdOutlineNightlight/>
       <FaRegBell/>
       <PiTranslateFill/>
    </div>
     </div>
     <Navbar/>
    <Dashboard/>
    <Sidebar/>
    </>
  )
}

export default App
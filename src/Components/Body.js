import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Maincont from './Maincont'
import { Outlet } from 'react-router-dom'
function Body() {
  return (
    <div className='flex'>
     <div className=''>
     <Sidebar/>
     </div>
    <div>
    <Outlet/>
      </div>
    </div>
  )
}

export default Body

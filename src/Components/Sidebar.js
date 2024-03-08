import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Sidebar() {
const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)


if(!isMenuOpen) {return null}
  return (
    <div className='g-5 w-52 pl-5'>
      <h1 className='font-bold pt-5'> </h1>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
        
      </ul>
      <h1 className='font-bold pt-5'> Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sport</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'> Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar

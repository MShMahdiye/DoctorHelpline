import React from 'react'
import { Link } from 'react-router-dom'

function Dropdown({isOpen,toggle}) {
  return (
    <div className={isOpen ?'grid grid-rows-4 text-center items-center bg-blue-400 rounded': 'hidden'}
    onClick={toggle}>
      <Link className='p-4 hover:bg-blue-300 hover:text-white
       border-b-6 border-blue-300 hover:border-blue-500 shadow hover:shadow-lg' to={"/"} >Home</Link>
      <Link className='p-4 hover:bg-blue-300 hover:text-white
       border-b-6 border-blue-300 hover:border-blue-500 shadow hover:shadow-lg' to={"/menu"} >Menu</Link>
      <Link className='p-4 hover:bg-blue-300 hover:text-white
       border-b-6 border-blue-300 hover:border-blue-500 shadow hover:shadow-lg' to={"/about"} >About</Link>
      <Link className='p-4 hover:bg-blue-300 hover:text-white
       border-b-6 border-blue-300 hover:border-blue-500 shadow hover:shadow-lg' to={"/contact"} >Contact</Link>
    </div>
  )
}

export default Dropdown

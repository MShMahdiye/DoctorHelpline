import React from 'react';
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='bg-white h-screen flex flex-col justify-center
    items-center'>
      {/* <img className="inline-flex ml-3 z-2"  width={230} height={230} src=" https://cdn-icons-png.flaticon.com/512/594/594580.png"/>  */}
      <img className="inline-flex ml-3 z-4 mb-14"  width={240} height={240} src="https://cdn-icons-png.flaticon.com/512/3974/3974860.png"/> 
      <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl
      font-black mb-14 hover:animate-pulse'>Doctor Helpline</h1>
      <Link to={"/menu"} className='py-6 px-10 bg-blue-500 rounded-full
      text-3xl hover:bg-blue-400 transition duration-300 
      ease-in-out flex items-center
      animate-bounce mb-14'> 
        Start Now
        <svg className="w-8 h-8 ml-3 mt-2 hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" /></svg>
        {/* <img className="inline-flex w-8 h-8 ml-3" src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-microscope-education-justicon-flat-justicon.png"/> */}
      </Link>
    </div>
  )
}

export default Hero

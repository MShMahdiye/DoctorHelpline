import React, { useState, useEffect } from 'react';
import Scroll from '../Scroll';
import Drlist from './Drlist';
// import Hero from './Hero';

function Content() {

  const [id, setid] = useState(null)
  const showModal = ({ id }) => {

    setid({ id })
  }
  return (
    <>
      {/* <div className='flex justify-center items-center flex-col bg-blue-300 h-screen font-mono p-0'> */}
        {/* <Scroll className=" flex flex-wrap justify-center items-center bg-blue-300"> */}
          <Drlist showModal={showModal} />
        {/* </Scroll> */}
      {/* </div> */}
    </>
  )
}

export default Content

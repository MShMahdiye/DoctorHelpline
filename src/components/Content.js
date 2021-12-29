import React, { useState } from 'react';
import Drlist from './Drlist';

function Content() {

  const [id, setid] = useState(null)
  const showModal = ({ id }) => {

    setid({ id })
  }
  return (
    <>
      <Drlist showModal={showModal} />
    </>
  )
}

export default Content

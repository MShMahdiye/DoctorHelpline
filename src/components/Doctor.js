import React, { useState, useEffect } from 'react';
// import Scroll from "./Scroll";
import { useParams } from "react-router-dom";
import { Rating } from 'react-simple-star-rating'
// import Card from "./Card";


function Doctor() {

  const { id } = useParams();
  const [Doctor, setDoctor] = useState([]);
  const [rating, setRating] = useState(3);

  useEffect(() => {
    fetch(`https://www.tebinja.com/api/v1/doctors/${id}`)
      .then(response => { return response.json() })
      .then(data => { return data.doctor })
      // .then(users => {robots.push(users)})
      .then(res => { setDoctor(res) })
    // .then(res => {console.log("im res hi:",res);})
  })

  

  const handleRating = (rate= 3) => {
    setRating(rate)
    // other logic
  }

console.log("==========");
  console.log("RATE:",Doctor.rate);
  return (
    <div className="relative font-Jomhuria">
      <div className='flex flex-wrap justify-center text-center items-center bg-white font-Jomhuria w-150'>
        <img
          src={
            "https://www.tebinja.com/img/uploads/doctors/thumbnails/" +
            Doctor.url
          }
          className='rounded mb-2 shadow' width={150} height={150}>
        </img>
      </div>
      <div className='flex items-center text-center justify-center'>
        <Rating onClick={handleRating} ratingValue={(Doctor.rate)*20} readonly={true}/* Available Props */ />
      </div>
      <h3 className='text-3xl mb-2 text-center font-Jomhuria border-b-2 border-blue shadow'>{Doctor.fname} {Doctor.lname}</h3>
      <h3 className='text-2xl mb-2 text-center'>{Doctor.address}</h3>
      <h3 className='text-2xl mb-2 text-center'>کد پزشکی : {Doctor.pezeshkCode}</h3>
      <h3 className='text-2xl mb-4 text-center'>{Doctor.about}</h3>
    </div>
  )
}


export default Doctor;





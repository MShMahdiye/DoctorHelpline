import * as React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, Route, Routes } from "react-router-dom";
// import "./Drlist.css";

const Drlist = ({ showModal }) => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://www.tebinja.com/api/v1/doctors/searchi?page=0")
      .then(response => {
        setIsLoaded(true);
        return response.json();
      }).then(data => { return data.doctors })
      .then(hit => { setItems(hit.hits); })
      .catch(error => {
        setError(error);
      });
  }, []);

  console.log(items);
  if (error !== null) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="relative justify-center text-center items-center bg-blue-300  font-mono mt-2">
        {items.map((item, i) => {
          const deepClone = obj => JSON.parse(JSON.stringify(obj))
          const obj = deepClone(items)
          console.log("obj in stringify:", obj);
          console.log("drlist obj source is ::", obj[0]._source.clinics);
          const lat = obj[i]._source.clinics[0].latitude
          const lng = obj[i]._source.clinics[0].longtitude
          console.log("obj source clinic:", obj[i]._source.clinics[0]);
          console.log("obj source clinic long", obj[i]._source.clinics[0].longtitude);
          const geo = { lat, lng }
          // const geo = [lat, lng]


          console.log("im geo : ", geo);
          let id1 = item._id
          return (

            <div className="flex flex-wrap text-center items-center w-500 h-200 border border-blue-500 shadow" onClick={() => { showModal({ id1 }); }}>
              <div className="text-center items-center">
                <div className="flex flex-wrap text-center items-center justify-center w-500">
                  <div className="items-center justify-center flex flex-wrap"><img
                    src={
                      "https://www.tebinja.com/img/uploads/doctors/thumbnails/" +
                      item._source.url
                    }
                    className="items-center justify-center" width={150} height={150}
                  ></img>
                  </div>
                  <div className="name">{item._source.fname} {item._source.lname} </div>
                  <div className="speciality">تخصص : {item._source.spUnis[0].specialty.name}</div>
                  <Link className='p-4' to={`/doctors/${id1}`} key={id1}>Read more</Link>
                </div>
              </div>
            </div>
          )
        }
        )}
      </div>
    );
  }
};

export default Drlist;

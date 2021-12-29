import * as React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

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
      <div className="flex flex-wrap justify-center text-center items-center bg-blue-300 h-screen font-Jomhuria mt-2 w-800 bg-blue-300" id="ftydrf" style={{width:800,height:500, display: 'flex', flexWrap: 'wrap'}} >
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
          console.log("im geo : ", geo);
          let id1 = item._id
          return (

            <div 
              className="flex flex-wrap text-center items-center w-1000 h-400 m-3" 
              onClick={() => { showModal({ id1 }); }}
            >
              <div className="text-center items-center  rounded-lg shadow-lg backdrop-blur" style={{background: ''}}>
                <div className="flex flex-wrap text-center items-center justify-center shadow-lg h-500 w-1000" style={{flexDirection: 'column',height:400}}>
                  <div className="items-center justify-center flex m-6 mr-8 mt-10">
                    <img
                      src={
                        "https://www.tebinja.com/img/uploads/doctors/thumbnails/" +
                        item._source.url
                      }
                      className="items-center justify-center" width={150} height={150} margin={10}
                    />
                  </div>
                  <div className="name m-6 inline-flex flex-wrap">{item._source.fname} {item._source.lname} </div>
                  <div className="speciality mb-2 border-b-2 border-gray">تخصص : {item._source.spUnis[0].specialty.name}</div>
                  <Link className='py-1 px-8  bg-blue-500 rounded-full shadow-lg text-blue-100' to={`/doctors/${id1}`} key={id1}>Read more</Link>
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

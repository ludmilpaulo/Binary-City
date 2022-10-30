import React, { useState, useEffect } from 'react';


function App() {
  const [data, seData ] = useState<any[]>([]);

  //const clients = JSON.stringify(data)

  useEffect(() =>{
    fetch('http://127.0.0.1:8000/list/', {
      method : 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then( resp => resp.json())
    .then( resp => seData(resp.clients))
    .catch( error => console.log(error))
  }, [])

  console.log("respose=>", data)

  return (
    <>
  {data?.map(client => (
    <div  className="container mx-auto bg-cover">

    <p 
   
    className="text-gray-500 text-lg">
        {client.name}
    </p>
 
       
    <p className="text-3xl text-gray-700 font-bold mb-5">
      Welcome!
    </p>
   
  </div>
   ))}
   </>
  );
}

export default App;

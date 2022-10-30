import React, { useState, useEffect } from 'react';
import background from "./assets/last.gif";
import back from "./assets/done.svg";


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
    /*
<div className="bg-cover bg-center ..." style={{ backgroundImage: `url(${back})`,
    backgroundPosition: 'center',
    backgroundSize: 'auto'
   // backgroundRepeat: 'no-repeat'
  }}></div>
*/
  <div style={{
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
  }}>
<img src={background} />

  </div>
  
  );
}

export default App;

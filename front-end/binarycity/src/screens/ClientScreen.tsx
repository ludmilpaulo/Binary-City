import React, { useState, useEffect } from 'react';


function ClientScreen() {
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
    <div className="h-56 grid grid-cols-3 gap-4 content-start ...">


<table className="border-separate border border-slate-500 table-auto">
<thead>
  <tr>
    <th className="border border-slate-600 ...">Name</th>
    <th className="border border-slate-600 ...">Client Code</th>
  </tr>
</thead>
<tbody>
{data.map(client => (
  <tr key={client.id}>
    <td className="border border-slate-700 ...">{client.name}</td>
    <td className="border border-slate-700 ...">{client.client_code}</td>
  </tr>
    ))}
</tbody>
</table>    

   </div>
  );
}

export default ClientScreen;

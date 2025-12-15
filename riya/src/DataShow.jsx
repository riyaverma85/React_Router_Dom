 import axios from 'axios';
 import React, { useEffect, useState } from 'react';

const App = () => {
  let[Data,setData]=useState([])
  useEffect(() => {
    let api = "http://localhost:3000/Hotel";  
    axios.get(api).then((res) => {
        console.log(res.data);
        setData(res.data)
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []); 
  let DataDelete=(id)=>{
    let api = `http://localhost:3000/Hotel/${id}`;  
      axios.delete(api).then(()=>(
        alert("data deleted")
      ))
  }

  return (
    <>
      <h1>Helloo</h1>

      <table border={2} >
        <thead>
            <tr>
              <th>Name</th>
              <th>age</th>
              <th>cheackin</th>
              <th>cheackout</th>
              <th>roomno</th>
              <th>Delete</th>
            </tr>
        </thead>
       
        <tbody>
           {Data.map((e)=>(
         <tr>
            <td>{e.name}</td>
             <td>{e.age}</td>
              <td>{e.cheackin}</td>
               <td>{e.cheackout}</td>
                <td>{e.roomno}</td>
                <td onClick={()=>(DataDelete(e.id))}> delete</td>
          </tr>
              ))}
        </tbody>
      </table>
    </>
  );
}
export default App;
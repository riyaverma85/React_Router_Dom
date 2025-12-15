import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataShow = () => {
  let[useData,setuseData]=useState([])
  useEffect(() => {
    let api = "http://localhost:3000/Hotel";  
    axios.get(api).then((res) => {
        console.log(res.data);
        setuseData(res.data)
      }).catch((err) => {
        console.log("Error", err);
      });
  }, []); 

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
            </tr>
        </thead>
       
        <tbody>
           {Data.map((e)=>{
          <tr>
            <td>{e.name}</td>
             <td>{e.age}</td>
              <td>{e.cheackin}</td>
               <td>{e.cheackout}</td>
                <td>{e.roomno}</td>
          </tr>
              })}
        </tbody>
      </table>
    </>
  );
}
export default DataShow;
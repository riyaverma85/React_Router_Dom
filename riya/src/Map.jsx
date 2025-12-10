 import React from 'react'
 
 const Map = () => {
    let MyData=["riya","soni","kumar","singh"]
   return (
     <>
     <h1>Map</h1>
     <ul>
        {
      MyData.map((e,i)=>(
      <li key={i}>{e}</li>)
       ) }
     </ul>
     </>
   )
 }
 
 export default Map
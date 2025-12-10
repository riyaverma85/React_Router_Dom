 import React from 'react'
 
 const Map = () => {
    // let MyData=["riya","soni","kumar","singh"]

    let Data=[
        {id:1,name:"riya verma",age:22},
        {id:2,name:" akanchha soni",age:21},
        {id:3,name:"rohit kumar",age:23},
    ]
   return (
     <>
     <h1>Map</h1>
 {Data.map((r)=>(
     <div key={r.id}>
              <h1>{r.name}</h1>
              <p>{r.age}</p>
     </div>  
    ))}
     </>
   )
 }
 export default Map
 import React from 'react'
 
 const Map = () => {
    // let MyData=["riya","soni","kumar","singh"]

    let Data=[
        {id:1,name:"riya",age:22},
        {id:2,name:"soni",age:21},
        {id:3,name:"kumar",age:23},
    ]
   return (
     <>
     <h1>Map</h1>
 {Data.map((e)=>(
     <div key={e.id}>
              <h1>{e.name}</h1>
              <p>{e.age}</p>
     </div>  
    ))}
     </>
   )
 }
 export default Map
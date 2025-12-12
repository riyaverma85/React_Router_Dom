//  import React from 'react'
//  const Map = () => {
//     // let MyData=["riya","soni","kumar","singh"]
//     let Data=[
//         {id:1,name:"Riya verma",age:22},
//         {id:2,name:" Akanchha soni",age:21},
//         {id:3,name:"Rohit kumar",age:23},
//     ]
//    return (
//      <>
//      <h1>Map method</h1>
//  {Data.map((r)=>(
//      <div key={r.id}>
//           <h1>{r.name}</h1>
//            <p>{r.age}</p>
//      </div>  
//     ))}
//      </>
//    )
//  }
//  export default Map












const Map=()=>{
  let Data=[
    {id:1,name:"Riya Verma",age:18}
    ,{id:2,name:"Ravina wagmare",age:18},
    {}
  ]
  return(
    <>
    { Data.map((i)=>(
      <div key={i.id}>
    <h1>{i.name}</h1>
    <p>{i.age}</p>
    </div>
    )
  )
}
    </>
  )
}
export default Map
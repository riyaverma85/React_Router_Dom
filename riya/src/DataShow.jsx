import React, { useEffect } from 'react'
import axios from 'axios'
const DataShow = () => {
  useEffect(()=>{
    let Api="http://localhost:3000/Hotel"
    axios.get(Api).then((res)=>{
      console.log(res.data);
    }).catch((err)=>{
      console.log("Error",err);
    })
  })
  return (
    <>
    <h1>Helloo i try to connect  Api please cheack to </h1>
    
    </>
  )
}

export default DataShow
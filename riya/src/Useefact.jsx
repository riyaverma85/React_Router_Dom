import React, { useEffect,useState } from 'react'

const App = () => {
let [Count,setCount]=useState(0)
let Incri=()=>{
    setCount(Count+1)
}
 useEffect (()=>{
     console.log("running.....")
 },[])
  return (
    <>
    <button onClick={Incri}>incriment</button>
    count:{Count}
    </>
  )
}

export default App
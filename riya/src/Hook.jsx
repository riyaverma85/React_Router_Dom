// import React, { useState } from 'react'
// // import "./Hook.css"
// const App = () => {
//   let [count,setcount]=useState(0)
//   let Inc=()=>{
//     setcount(count+1)
//     console.log(count);
//   }
// let Dec=()=>{
//   setcount(count-1)
//   console.log(count)
// }
//   return (
//     <>
//     <h1>Counter</h1>
//     <p>count:{count}</p>
//     <button onClick={Inc} className='text-' >Incrimet</button>
//     <button onClick={Dec}>Decriment</button>
//     </>
//   )
// }
// export default App


import React, { useState } from 'react'
const Hook = () => {
  let [name,setname]=useState("")
  let change=(e)=>{
    setname(e.target.value)
  }
let [city,setcity]=useState("")
let sem=(e)=>{
  setcity(e.target.value)
}
  return (
    <>
    Enter your name:<input  type='text' onChange={change}/>
    <h1>name {name}</h1>
    Enter city :<input type='city' onChange={sem}/>
    <h1>city  {city}</h1>
    </>
  )
}
export default Hook
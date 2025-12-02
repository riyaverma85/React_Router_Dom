import React, { useState } from 'react'
const App = () => {
  let [count,setcount]=useState(0)
  let Inc=()=>{
    setcount(count+1)
    console.log(count);
  }
let Dec=()=>{
  setcount(count-1)
  console.log(count)
}
  return (
    <>
    <h1>Counter</h1>
    <p>count:{count}</p>
    <button>Incrimet</button>
    </>
  )
}
export default App
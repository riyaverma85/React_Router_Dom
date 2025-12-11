import React from 'react'
import Child from './Child';


const App = () => {
  return (
    <>
    <h1>home page</h1>
         {/* <Child myname={name} myage={age} myprice={price} myproductname={productname}/> */}
         <Child  img={img} myname="riya" myage={18} myprice={400} myproductname="one plush nord"/>
    </>
  )
}
export default App;
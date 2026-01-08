import React from 'react'
import Child from './Child';
const App = () => {
  return (
    <>
         {/* <Child myname={name} myage={age} myprice={price} myproductname={productname}/> */}
         {/* <Child myname="riya" myage={18} myprice={400} myproductname="one plush nord"/> */}
         <Child myname="Riya" course="React"/>
    </>
  )
}
export default App;
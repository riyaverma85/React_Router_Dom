import React, { useContext } from 'react'
import UserContext from './ContextApi'
import MainParent from './MainParent'
const MainChild = () => {
     let mydata=useContext(UserContext)
  return (
    <>
    <h1>child</h1>
    <p>my name is{mydata.name}</p>
    <MainParent/>
    </>
  )
}

export default MainChild




// MainChild.jsx
// import React, { useContext } from "react";
// import UserContext from "./ContextApi";

// const MainChild = () => {
//   const data = useContext(UserContext); // data = { name: "Riya" }

//   return (
//     <>
//       <h1>Child Component</h1>
//       <p>My name is {data.name}</p>
//     </>
//   );
// };

// export default MainChild;

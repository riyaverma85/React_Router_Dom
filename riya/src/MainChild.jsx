import React, { useContext } from 'react'
import UserContext from './ContextApi'
const MainChild = () => {
     let{mydata}=useContext(UserContext)
  return (
    <>
    <h1>child</h1>
    
    <p>my name is{mydata.name}</p>
    
    </>
  )
}

export default MainChild
import React, { useContext } from 'react'
import UserContext from './ContextApi'
const MainChild = () => {
     let{mydata}=useContext(UserContext)
  return (
    <>
    <h1>child</h1>
    MainChild
    
    <p>my name is{mydata.city}</p>
    
    </>
  )
}

export default MainChild
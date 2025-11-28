import React from 'react'
// import img from "..//src/download.jpg"
const Child= ({myname,myage,myprice,myproductname,myimg}) => {
  // let[name,age,city]=mydata

  // let props={
  //   myname:"riya",
  //   myage:18
  // }
  // let {myname,myage}=props

  return (
    <div>
     <h1>Hello Child </h1>
     <img src={img} alt="" />
     <h2>My name is = {myname}</h2>
     <h2>My age is = {myage}</h2>
     <h2>my price is ={myprice}</h2>
     <h2>my product is ={myproductname}</h2>
      </div>
  )
}

export default Child;
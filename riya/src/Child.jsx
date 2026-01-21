// import React from 'react'
// // import img from "..//src/download.jpg"
// const Child= ({myname,myage,myprice,myproductname}) => {
//   // let[name,age,city]=mydata

//   // let props={
//   //   myname:"riya",
//   //   myage:18
//   // }
//   // let {myname,myage}=props

//   return (
//     <div>
//      <h1>Hello Child </h1>
//      <h2>My Name is = {myname} </h2>
//      <h2>My Age is = {myage} </h2>
//      <h2>My Price is = {myprice} </h2>
//      <h2> My Product is = {myproductname} </h2>
//       </div>
//   )
// }

// export default Child



import React from 'react'

const Child = ({myname,course}) => {
  return (
    <div>
        <h1> Hello,my name is {myname} </h1>
         <h1> and i am lurning {course} </h1>
    </div>
  )
}

export default Child
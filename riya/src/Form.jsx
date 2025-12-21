// import React, { useState } from 'react'
// const Form = () => {
//     let [name,setname]=useState("")
//     let [email,setemail]=useState("")
//     let Hundlesubmit=(e)=>{
//        e.preventDefault()  /////////////iska use isliye kte hai ki form submit hone pr page reload na ho
//        console.log(name,email);
//     }
//     return (
//     <>
//     <h1>Form handling</h1>
//     <form onSubmit={Hundlesubmit}>
//        Enter your Name<input type="text" value={name} onChange={(e)=>setname(e.target.value)} /><br/>
//        Enter your Email <input type='Email' value={email} onChange={(e)=>setemail(e.target.value)} /><br/>
//         <button type='submit'>save data</button>
//     </form>
//     </>
//   )
// }
// export default Form

///////////////////////////////////////////////
// import React, { useState } from 'react'

// const Hook = () => {
  // let [name,setname]=useState("")
  // let[age,setage]=useState("")
  // let [email,setemail]=useState("")
  // let Heandling=(e)=>{
  //   e.preventDefault()
  // alert(`your name is ${name} and your age is${age} andyour email is ${email}`)
  // }
//   import React, { useState } from 'react'

// const App = () => {
//   let [form,setform]=useState({
//     name:"",
//     age:"",
//     email:"",
//     password:""
//   })
//   let handleChange=(e)=>{
//     setform({...form,[e.target.name]:e.target.value})
//   }
//   let handleSubmit=(e)=>{
//     e.preventDefault()
//     let valid=true;

//     if(form.name.trim()==""){
//       alert("password is required.")
//       valid=false;
//     }
//     else if(form.age.trim()==""){
//       alert("age is required.")
//       valid=false;
//     }
//     if(valid){
//       alert("sinup successful")
//       localStorage.setItem("name",form.name)
//       localStorage.setItem("age",form.age)
//       localStorage.setItem("email",form.email)
//       navigate("/login")
//     }
//   }
//   return (
//     <>
//     <h1>Fill form and singUp</h1>
//     <div style={{ backgroundColor:"pink", textAlign:"center", border:"solid 1px black", width:"400px", margin:"auto", marginTop:"50px", }}>
//     <h1 style={{color:"blue"}}>form heandling</h1>
//     <form onSubmit={handleSubmit}  >
// Enter your Name<input type='text 'name='name' value={form.name} onChange={handleChange}/><br/>
// Enter your Age<input type='text'name='age' value={form.age} onChange={handleChange}/><br/>
// Enter your Email<input type='text'name='email' value={form.email} onChange={handleChange}/><br/>
// Enter password<input type='text'name='password' value={form.password} onChange={handleChange} /><br/>
// <button type='submit'>shave Data</button>
//     </form>
//     </div>
//     </>
//   )
// }
// export default App


import axios from 'axios'
import { useState } from 'react'

const App = () => {
  let [form, setform] = useState({
    name: "",
    age: "",
    aadharnumber: "",
    cheackin: "",
    cheackout: "",
    city: "",
    person:""
  })

  let Handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  let Handlesubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (form.name.trim() === "") {
      alert("Name cannot be empty")
      valid = false
    } else if (form.aadharnumber.trim() === "") {
      alert("Please enter number")
      valid = false
    }
    if(valid){
        let api = "http://localhost:3000/Hotel";  
        axios.post(api,{...form,person:500}).then((res)=>{
          alert("Data submited")
        })
    }
  }

  return (
    <>
      <h1>Form Handling</h1>
      <form onSubmit={Handlesubmit}>
      Enter Name:<input type='text' name='name' value={form.name} onChange={Handlechange} /><br/>
      Enter Age:<input type='text' name='age' value={form.age} onChange={Handlechange} /><br/>
      Enter aadharnumber:<input type='text' name='aadharnumber' value={form.aadharnumber} onChange={Handlechange} /><br/>
      Cheackin:<input type='date' name='cheackin'  value={form.cheackin} onChange={Handlechange} /><br/>
        Cheackout:<input type='date' name='cheackout' value={form.cheackout} onChange={Handlechange} /><br/>
      Select City:<select name='city' value={form.city} onChange={Handlechange}>
          <option value="Bhopal">Bhopal</option>
          <option value="sehore">Sehore</option>
          <option value="indore">Indore</option>
          <option value="delhi">Delhi</option>
        </select><br/>

      person:<input type='text' name='person' value={form.person} onChange={Handlechange}/><br/>

        <button type="submit">Shave Data</button>
      </form>
    </>
  )
}
export default App
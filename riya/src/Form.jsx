import React, { useState } from 'react'

const Form = () => {
    let [name,setname]=useState("")
    let [email,setemail]=useState("")
    let Hundlesubmit=(e)=>{
       e.preventDefault()
       console.log(name,email);
    }
    return (
    <>
    <h1>Form handling</h1>
    <form onSubmit={Hundlesubmit}>
       Enter your Name<input type="text" value={name} onChange={(e)=>setname(e.target.value)} /><br/>
       Enter your Email <input type='Email' value={email} onChange={(e)=>setemail(e.target.value)} /><br/>
        <button type='submit'>save data</button>
    </form>
    </>
  )
}

export default Form
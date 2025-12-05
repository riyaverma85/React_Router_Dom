import React, { useState } from 'react'

const Form = () => {
    let [name,setname]=useState("")
    let Hundlesubmit=(e)=>{
       e.preventDefault()
       alert(name)

    }
    let [email,setemail]=useState("")
    let Hundlesubmitemail=(e)=>{
       e.preventDefault()
       alert(email)
    }
  return (
    <>
    <h1>Form handling</h1>
    <form onSubmit={(e)=>{Hundlesubmit(e);Hundlesubmitemail(e)}}>
       Enter your Name<input type="text" onChange={(e)=>setname(e.target.value)} /><br/>
       Enter your Email <input type='Email' onChange={(e)=>setemail(e.target.value)} /><br/>
        <button type='submit'>save data</button>
    </form>
    </>
  )
}

export default Form
import React, { useState } from 'react'

const Sing_Up = () => {
    let[name,setname]=useState({
        name:"",
        emai:"",
        password:""

    })
    let Change=(e)=>{
        setname({...form,[e.target.name]:e.target.value})
    }
     

  return (
    <>
    <form>
Enter your Name<input type='text' name='Name'onChange={Change}/><br/>
Enter your Email<input type='text' name='Email' onChange={Change}/><br/>
Enter your Password<input type='text' name='password'onChange={Change}/><br/>
<button>save</button>
    </form>
    
    </>
  )
}

export default Sing_Up
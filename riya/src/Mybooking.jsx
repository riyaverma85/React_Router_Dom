import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {

    let[Data,setData]=useState([])
    let FetchData=()=>{
        let api="http://localhost:3000/Movie"
    axios.get(api).then((res)=>{
            console.log(res.data)
            setData(res.data)
        }).catch((err)=>{
        console.log("error",err)
    })
    }

    useEffect(()=>{
        FetchData()
    },[])

    let DeleteData=(id)=>{
        let api=`http://localhost:3000/Movie/${id}`
        axios.delete(api).then(()=>{
            FetchData()
            alert("data deleted")
        })
    }
  return (
    <>
<h1>my booking</h1>
<table style={{ border: "2px solid black" }}>
    <thead>
         <tr style={{ border: "2px solid black" }}>
             <th>Movie Name</th>
             <th>Date</th>
             <th>City</th>
             <th>Person</th>
         </tr>
    </thead>
    <tbody>
        {Data.map((e)=>(
        <tr style={{ border: "2px solid black" }} key={e.id}>
             <td>{e.moviename}</td>
             <td>{e.date}</td>
             <td>{e.city}</td>
             <td>{e.person}</td>
             <td onClick={()=>{DeleteData(e.id)}}>delete</td>
        </tr>
        ))}
    </tbody>
</table>

    </>
  )
}

export default App
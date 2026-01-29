import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useEffect, useState } from 'react'
const Mybooking = () => {

    let[Data,setData]=useState([])
    let FetchData=()=>{
        let api="http://localhost:3000/Hotel"
    axios.get(api).then(
        (res)=>{
            console.log(res.data)
            setData(res.data)
        }
    ).catch((err)=>{
        console.log("error")
    })
    }

    useEffect(()=>{
        FetchData()
    },[])

    let DeleteData=(id)=>{
        let api="http://localhost:3000/Hotel"
        axios.delete(api).then(()=>{
            FetchData()
            alert("data deleted")
        })
    }
  return (
    <>
<h1>my booking</h1>
<table className='border'>
    <thead>
        <tr className='border'>
            <th>Movie Name</th>
            <th>Date</th>
            <th>City</th>
            <th>Person</th>
        </tr>
    </thead>
    <tbody>
        {Data.map((e)=>(
        <tr className='border' key={e.id}>
            <td>{e.MovieName}</td>
            <td>{e.Date}</td>
            <td>{e.City}</td>
            <td>{e.Person}</td>
            <td onClick={()=>{DeleteData(e.id)}}>delete</td>
        </tr>
        ))}
    </tbody>
</table>

    </>
  )
}

export default Mybooking
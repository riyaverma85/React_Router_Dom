import React, { useState } from 'react'

const Mybooking = () => {

    let[Data,setData]=useState([])
    let FetchData=()=>{

    }
  return (
    <>
<h1>my booking</h1>
<table className='border'>
    <thead>
        <tr>
            <th>Movie Name</th>
            <th>Date</th>
            <th>City</th>
            <th>Person</th>
        </tr>
    </thead>
</table>

    </>
  )
}

export default Mybooking
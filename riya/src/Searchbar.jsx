import React, { useState } from 'react'

const Searchbar = () => {
    let [search,setsearch]=useState("")

    let MyData=["riya","soni","kumar","singh","aman","rahul","rohit","ankit"]

    let FilterData=MyData.filter((e)=>{
        return e.toLowerCase().includes(search.toLowerCase())
    })
  return (
    <>
    <h1>Map to use searching bar</h1>
    Search<input type='text'value={search} onChange={(e)=>{setsearch(e.target.value)}}/>
    <ul>
        {FilterData.map((e,i)=>(<li key={i}>{e}</li>))}
    </ul>
    </>
  )
}
export default Searchbar
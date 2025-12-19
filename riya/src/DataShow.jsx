 import axios from 'axios';
 import React, { useEffect, useState } from 'react';

const App = () => {
  let [form,setform]=useState({
   name:"",
   age:"",
   aadharnumber:"",
   checkin:"",
   checkout:"",
   people:""
  })

  let[Data,setData]=useState([])
  let[editId,seteditId]=useState([null])

  let FetchData=()=>{
    let api = "http://localhost:3000/Hotel";  
    axios.get(api).then((res) => {
        console.log(res.data);
        setData(res.data)
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }

  useEffect(()=>{
    FetchData()
  },[])

  let DataDelete=(id)=>{
    let api = "http://localhost:3000/Hotel";  
    axios.get(api).then(() => {
alert("Booking canceled")
FetchData()
   } )
  }
  let handleChange=(e)=>{
    setform({...form,[e.target.name]:e.target.value})
  }
  let Handlesubmit=(e)=>{
    e.preventDefault();
  }
  let formopen=(e)=>{
    seteditId(e.id)
    setform({name:e.name,age:e.age,aadharnumber:e.aadharnumber,
      checkin:e.checkin,checkout:e.checkout,people:e.people})
  }
  useEffect(() => {
    let api = "http://localhost:3000/Hotel";  
    axios.get(api).then((res) => {
        console.log(res.data);
        setData(res.data)
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []); 
  

  return (
    <>
      <h1>Helloo</h1>

      <table border={2} >
        <thead>
            <tr>
              <th>Name</th>
              <th>age</th>
              <th>checkin</th>
              <th>checkout</th>
              <th>aadharnumber</th>
              <th>people</th>
              <th>Delete</th>
            </tr>
        </thead>
       
        <tbody>
           {Data.map((e)=>(
         <tr>
            <td>{e.name}</td>
             <td>{e.age}</td>
              <td>{e.aadharnumber}</td>
              <td>{e.checkin}</td>
               <td>{e.checkout}</td>
                <td>{e.people}</td>
                <td>{e.people*e.person}</td>
                <td onClick={()=>(DataDelete(e.id))}> delete</td>
                <td onClick={()=>(formopen(e))}>Edit</td>
          </tr>
              ))}
        </tbody>
      </table>
    </>
  );
}
export default App;
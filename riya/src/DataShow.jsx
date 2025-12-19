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
  let DataDelete=(id)=>{
    let api = `http://localhost:3000/Hotel/${id}`;  
      axios.delete(api).then(()=>(
        alert("data deleted")
      ))
  }

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
              <td>{e.checkin}</td>
               <td>{e.checkout}</td>
                <td>{e.aadharnumber}</td>
                <td>{e.people}</td>
                <td>{e.people*e.person}</td>
                <td onClick={()=>(DataDelete(e.id))}> delete</td>
          </tr>
              ))}
        </tbody>
      </table>
    </>
  );
}
export default App;
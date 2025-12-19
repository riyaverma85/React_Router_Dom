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

      { editId &&(
        <form onSubmit={Handlesubmit}>
      Enter Name:<input type='text' name='name' value={form.name} onChange={handlechange} /><br/>
      Enter Age:<input type='text' name='age' value={form.age} onChange={handlechange} /><br/>
      Enter aadharnumber:<input type='text' name='aadharnumber' value={form.aadharnumber} onChange={handlechange} /><br/>
      people:<input type='text' name='people' value={form.people} onChange={handlechange}/><br/>
      Select City:<select name='city' value={form.city} onChange={handlechange}>
          <option value="Bhopal">Bhopal</option>
          <option value="sehore">Sehore</option>
          <option value="indore">Indore</option>
          <option value="delhi">Delhi</option>
        </select><br/>

        Checkin:
        <input type='date' name='Checkin'  value={form.Checkin} onChange={handlechange} /><br/>
        Checkout:
        <input type='date' name='checkout' value={form.checkout} onChange={handlechange} /><br/>
        <button type="submit">Submit</button>
      </form>
      )

      }
    </>
  );
}
export default App;
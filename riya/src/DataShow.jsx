import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
  let [form, setform] = useState({
    name: "",
    age: "",
    aadharnumber: "",
    cheackin: "",
    cheackout: "",
    city: "",
    person: ""
  });

  let [Data, setData] = useState([]);
  let [editId, seteditId] = useState(null);
  let [search, setsearch] = useState("");

  
  let FilterData = Data.filter((e) => {
  return (
    (e.name && e.name.toLowerCase().includes(search.toLowerCase())) ||
    (e.city && e.city.toLowerCase().includes(search.toLowerCase())) ||
    (e.person && String(e.person).toLowerCase().includes(search.toLowerCase()))
  );
});
  let FetchData = () => {
    let api = "http://localhost:3000/Hotel";
    axios.get(api)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("Error",err);
      });
  };

  useEffect(() => {
    FetchData();
  }, []);

  let DataDelete = (id) => {
    let api = `http://localhost:3000/Hotel/${id}`;
    axios.delete(api).then(() => {
      alert("Booking canceled");
      FetchData();
    });
  };

  let HandleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  let Handlesubmit = (e) => {
    e.preventDefault();
    if (editId) {
      let api = `http://localhost:3000/Hotel/${editId}`;
      axios.put(api,form).then(() => {
        alert("Data updated");
        seteditId(null);
        FetchData();
      });
    } else {
      let api = "http://localhost:3000/Hotel";
      axios.post(api, form).then(() => {
        alert("Data submitted");
        FetchData();
      });
    }
  };

  let formopen=(e) => {
    seteditId(e.id);
    setform({
      name: e.name,
      age: e.age,
      aadharnumber: e.aadharnumber,
      cheackin: e.cheackin,
      cheackout: e.cheackout,
      city: e.city,
      person: e.person
    });
  };

  return (
    <>
      <h1>Helloo</h1>
      <div>
        <input type="text" placeholder="Search..." value={search}
          onChange={(e) => setsearch(e.target.value)}/>
      </div>

      <table border={2} >
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>aadharnumber</th>
            <th>cheackin</th>
            <th>cheackout</th>
            <th>city</th>
            <th>person</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {FilterData.map((e)=>(
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.aadharnumber}</td>
              <td>{e.cheackin}</td>
              <td>{e.cheackout}</td>
              <td>{e.city}</td>
              <td>{e.person}</td>
              <td onClick={()=> formopen(e)}>Edit</td>
              <td onClick={()=> DataDelete(e.id)}>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>

      {editId && (
        <form onSubmit={Handlesubmit}>
          Enter Name:<input type='text' name='name' value={form.name} onChange={HandleChange} /><br />
          Enter Age:<input type='text' name='age' value={form.age} onChange={HandleChange} /><br />
          Enter aadharnumber:<input type='text' name='aadharnumber' value={form.aadharnumber} onChange={HandleChange} /><br />
          Cheackin:
          <input type='date' name='cheackin' value={form.cheackin} onChange={HandleChange} /><br />
          Cheackout:
          <input type='date' name='cheackout' value={form.cheackout} onChange={HandleChange} /><br />
          Select City:<select name='city' value={form.city} onChange={HandleChange}>
             <option value="Bhopal"> Bhopal</option>
             <option value="sehore"> Sehore</option>
             <option value="indore"> Indore</option>
             <option value="delhi"> Delhi</option>
          </select><br />
          person:<input type='text' name='person' value={form.person} onChange={HandleChange} /><br />

          <button type="submit"> Save Data</button>
        </form>
      )}
    </>
  );
};

export default App;
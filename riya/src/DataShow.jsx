import React, { useEffect } from 'react';
import axios from 'axios';

const DataShow = () => {
  useEffect(() => {
    let api = "http://localhost:3000/Hotel";  
    axios.get(api).then((res) => {
        console.log(res.data);
      }).catch((err) => {
        console.log("Error", err);
      });
  }, []); 

  return (
    <>
      <h1>Helloo</h1>
    </>
  );
}
export default DataShow;
import React from "react";

const Profile = ({  img,name, city }) => {
  return (
    <>
      <h1>{img}</h1>
      <h1>name is = {name}</h1>
      <h1>city is = {city}</h1>
    </>
  )
}
export default Profile;
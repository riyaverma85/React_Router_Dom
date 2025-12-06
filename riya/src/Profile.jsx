import React from "react";

const Profile = ({ name, img, city }) => {
  return (
    <>
      <img src={img} alt="" />
      <h1>name is = {name}</h1>
      <h1>city is = {city}</h1>
    </>
  );
};

export default Profile;
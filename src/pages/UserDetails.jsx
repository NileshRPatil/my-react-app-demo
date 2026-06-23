import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserDetails() {
  const [user, setUser] = useState();
  const { id } = useParams();

  useEffect(()=>{
    axios.get(`https://dummyjson.com/users/${id}`)
    .then(response => {
      setUser(response.data)
      console.log(response.data);
    })
    .catch((error) => console.log(error))
  },[])

  return (
    <>
    {user && 
    <div className="card-container">
      <div className="card">
        <p className="card-title">Name : {user.firstName} {user.lastName}</p>
        <p className="card-text">Email : {user.email}</p>
        <p className="card-text">Mobile : {user.phone}</p>
        <p className="card-text">Age : {user.age} years</p>
      </div>
      </div> }
    </>
  );
}
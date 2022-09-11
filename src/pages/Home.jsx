import axios from "axios"
import { useEffect, useState } from "react"
import "./home.css";

export const Home = () => {
    const [data, setdata] = useState({})
    let email=localStorage.getItem("email");
    useEffect(() => {
       axios.get(`http://localhost:8080/users`, {
         params: {
           "email": email,
         },
       }).then((res)=>setdata(res.data[0]))
    }, [])

  return (
    <div className="home">
      <div className="avatar">
        <img src="./pngegg.png" alt="" />
      </div>
      <div className="details">
        <p>Name:{data.name}</p>
        <p>Email:{data.email}</p>
        <p>Number:{data.number}</p>
      </div>
    </div>
  );
}

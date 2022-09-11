import axios from "axios";
import { useEffect, useState } from "react";
import "./signup.css";

export const SignUp = () => {
      const [name, setname] = useState("")
      const [number, setnumber] = useState("");
      const [email, setemail] = useState("");
      const [password, setpassword] = useState("");
      let [flag, setflag] = useState(true);
     
  
  

      const handleSubmit= ()=>{
          axios
            .get(`https://shrouded-mesa-85630.herokuapp.com/users`, {
              params: {
                email: email,
              },
            })
            .then((res) =>
              res.data[0].email == email
                ? (alert("user already exists"), setflag(false), (flag = false))
                : (setflag(true), (flag = true))
            );

          if(name.length>0 && number.length>0 && email.length>0 && password.length>0 && flag===true)
          {
              

              if(number.length<10)
              {
                  alert("put 10 digit number")
              }
              else if(password.length<8)
              {
                  alert("put atleast 8 character in password");
              }
              else if (!email.includes("@gmail.com")&&!email.includes("@yahoo.com")) {
                alert("please write valid email");
              }
             
              else {
                axios
                  .post("https://shrouded-mesa-85630.herokuapp.com/users", {
                    name: name,
                    number: number,
                    email: email,
                    password: password,
                  })
                  .then((response) => console.log(response))
                  .catch((err) => console.log(err));
                  setemail("");
                  setname("");
                  setpassword("");
                  setnumber("");
              }
                
          }
          else{
              if(flag!==false)
              {
                  alert("please fill all details");
              }
              
          }
         
      }

  return (
    <div className="main">
      <div className="sup">
        <input
          type="text"
          placeholder="name..."
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <input
        value={number}
          type="number"
          placeholder="number..."
          onChange={(e) => setnumber(e.target.value)}
        />
        <input
        value={email}
          type="text"
          placeholder="email..."
          onChange={(e) => setemail(e.target.value)}
        />
        <input
        value={password}
          type="password"
          placeholder="password..."
          onChange={(e) => setpassword(e.target.value)}
        />
        <button onClick={handleSubmit}>submit</button>
      </div>
    </div>
  );
}

{
  /*
1 import React, { useState, useEffect } from 'react';
2
3 export default function Upload Images() {
4 const [images, setImages] = useState([]);
5 const [imageURLs, setImageURLS] = useState([]);
6
7 useEffect(() => {
if (images.length< 1) return;
const newImageUrls = [];
10
images.forEach (image => newImageURLs.push(URL.createObjectURL(image))); setImageURLs (newImageUrls);
11
12
}, [images]);
13
14
15
function onImageChange(e) { setImages([...e.target.files]);
16
17
}
18
19
return (
20
<input type="file" multiple accept="image/" onChange={on ImageChange} /> {imageURLs.map(imageSrc => <img src={imageSrc} />) }
21
22
28
</>
);
24
*/
}

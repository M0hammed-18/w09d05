import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./style.css";
import { FaRegGrinTongue } from "react-icons/fa";
import {BsFillEmojiHeartEyesFill } from "react-icons/bs";


const BASE_URL = process.env.REACT_APP_BASE_URL;
const Register = () => {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username,setName]=useState('')
  const [role, setRole] = useState("61a7750f589f5a40c9c7848f");

  const newuser = async () => {
    try {
      const result = await axios.post(`${BASE_URL}/singup`, {
        username,
        email,
        password,
        role
      });
      console.log(result);
      navigate("/login")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <div className="singUpPage">
        <section className="sectionbox">

      <h3 id="h3text"> SingUp </h3>
      <input id="inputbox"
        type="text"
        name="name"
        placeholder="Enter Your Name "
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input id="inputbox"
        type="email"
        name="email"
        placeholder="Enter Your Email "
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input id="inputbox"
        type="password"
        name="password"
        placeholder="Enter Your Password "
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button  id="buttonbox"onClick={newuser}>Regester </button>
      </section>
      </div>
    </>
  );
};

export default Register;

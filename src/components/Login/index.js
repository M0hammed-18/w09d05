import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css"


const Login = () => {
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [local, setLocal] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLocal(token);
  }, []);

  const login = async (e) => {
      
    try {
        e.preventDefault();
      const result = await axios.post(`${BASE_URL}/loginn`, {
        email,
        password,
      });
      console.log(result);
      if(result.data.token){
      localStorage.setItem("token", result.data.token);
    
      }      
    } catch (err) {
      console.log(err,"what");
    }

    // navigate("/");
  };
  return (
    <div className="desing">
     {!local?(
       <div className="loginPage">

      <section>
      <h5>Login please</h5>
      <input
        type="email"
        name="email"
        placeholder="enter email "
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        name="password"
        placeholder="enter password "
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={login} 
      >Login</button>
      </section>
      </div>
      ):(
<h1></h1>
      )}
    </div>
  );
};

export default Login;
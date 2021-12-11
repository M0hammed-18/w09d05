import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import PasswordChecklist from "react-password-checklist";
import "./style.css";
import Nav from "../Nav";


const BASE_URL = process.env.REACT_APP_BASE_URL;
const Register = () => {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username,setName]=useState('')
  const [message, setMessage] = useState("");

  const state = useSelector((state) => {
    return {
      token: state.signIn.token,
    };
  });
  // eslint-disable-next-line
  const [role, setRole] = useState("61a7750f589f5a40c9c7848f");

  const newuser = async () => {
    setMessage("")
      const result = await axios.post(`${BASE_URL}/singup`, {
        username,
        email,
        password,
        role
      });
      console.log(result);
      if (result.status===201){
        window.alert("")
        navigate("/login")
      } else{
        setMessage(result.data.message)
      }
      
      
  };

  return (
    <>
    <Nav/>
    <div className="singUpPage">
      {state.token?(
        <section className="sectionbox">
          <p>You already loggedin, you don't need to signup</p>
          <button onClick={() => navigate("/")}>HOME</button>
          ) : (
      
      <PasswordChecklist
              rules={[
                "minLength",
                "specialChar",
                "number",
                "capital",
                "lowercase",
              ]}
              minLength={6}
              value={password}
              onChange={(isValid) => {
                if (isValid) {
                  const button = document.querySelector("#signupSubmitButton");
                  button.disabled = false;
                } else {
                  const button = document.querySelector("#signupSubmitButton");
                  button.disabled = true;
                }
              }}
            />
            <h3 id="h3text"> SingUp </h3>
            {message ? <div className="message">{message}</div> : ""}
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
      // eslint-disable-next-line
      ):(<h1></h1>)}
      </div>
      
    </>
  );
};

export default Register;

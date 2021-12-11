import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {login} from "./../../reducers/login"
import "./style.css";
import Nav from "../Nav";

const popupTools = require("popup-tools");
const Login = () => {
  // eslint-disable-next-line
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [local, setLocal] = useState("");
  const [message, setMessage] = useState("");

  const state = useSelector((state) => {
    return {
      token: state.Login.token,
    };
  });

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   setLocal(token);
  // }, []);

  const login = async (e) => {
    setMessage('')
    try {
      e.preventDefault();
      const result = await axios.post(`${BASE_URL}/loginn`, {
        email,
        password,
      });
      console.log(result);
      dispatch( login({ role: result.data.result.role, token: result.data.token }));
      navigate("/");
    } catch (err) {
      console.log(err, "what");
      setMessage(error.response.data.message);
    }

    navigate("/post");
    const googleLogin = () => {
      popupTools.popup(
        `http://localhost:5000/auth/google`,
        "Google Login",
        { width: 400, height: 600 },
        function (err, user) {
          if (err) {
            console.log(err);
          } else {
            dispatch( login({
                role: user.result.role,
                token: user.token,
              })
            );
            navigate("/");
          }
        }
      );
    }
  };
  return (
    <>
      <Nav />
      <div className="singUpPage">
        {!local ? (
          <div className="sectionbox">
            <section>
              <h5>Login </h5>
              <input
                id="inputbox"
                type="email"
                name="email"
                placeholder="enter email "
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                id="inputbox"
                type="password"
                name="password"
                placeholder="enter password "
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button onClick={login}>Login</button>
            </section>
          </div>
        ) : (
          <h1>go</h1>
        )}
      </div>
    </>
  );
};

export default Login;

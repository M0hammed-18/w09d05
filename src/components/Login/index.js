import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login1 } from "./../../reducers/login";
import "./style.css";
import Nav from "../Nav";

// const popupTools = require("popup-tools");
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
    // console.log("dd",state.signIn.token);
    return {
      token: state.signIn.token,
    };
  });
  console.log(state);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setLocal(token);
  }, []);

  const login = async () => {
    setMessage("");
    try {
      // e.preventDefault();
      const result = await axios.post(`http://localhost:4000/loginn`, {
        email,
        password,
      });
      const data = {};
      console.log("ll", result);
      dispatch(
        login1({ role: result.data.result.role, token: result.data.token })
      );
      navigate("/post");
    } catch (err) {
      console.log(err, "what");
      setMessage(err.response.data.message);
    }

    // navigate("/post");

    // const googlelogin = () => {
    //   popupTools.popup(
    //     `http://localhost:4000/auth/google`,
    //     "Google Login",
    //     { width: 400, height: 600 },
    //     function (err, user) {
    //       if (err) {
    //         console.log(err);
    //       } else {
    //         dispatch( login({
    //             role: user.result.role,
    //             token: user.token,
    //           })
    //         );
    //         navigate("/");
    //       }
    //     }
    //   );
    // }
  };
  return (
    <>
      <Nav />
      <div className="singUpPage">
        {!state.token ? (
          <div className="sectionbox">
            <section >
              <div className="sec">
              <h3>Login </h3>
              {message ? <div className="message">{message}</div> : ""}

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
              /></div>
              {/* <button
              type="button"
              className="login-with-google-btn"
              onClick={googlelogin}
            >
              Or Login with Google
            </button> */}
              <button id="bt" onClick={login}>Login</button>

              {/* <p>You already loggedin, you don't need to login</p>

              <button id="bt"onClick={() => navigate("/")}>home</button> */}
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

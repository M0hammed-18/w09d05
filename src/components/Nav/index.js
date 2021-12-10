import React from "react";
import "./style.css";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import "./style.css"

const Nav = () => {
  const navigate = useNavigate();

  const kick = () => {
    localStorage.clear();
    navigate("/SignUp");
  };
  return (
    <>
      <div className="wrapper">
        <NavLink to="/" onClick={kick} className="links">Home</NavLink>
        <div className="navMenu">
          <NavLink to="/signup" className="links">SingUp</NavLink>
          <NavLink to="/login" className="links">Login</NavLink>
        </div>
      </div>
    </>
  );
};
export default Nav;

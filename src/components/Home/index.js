import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
import { useNavigate } from "react-router-dom";
import SingUp from "../SingUp";
import Login from "../Login";


function Home() {
  const Navigate = useNavigate();

  const register = () => {
    Navigate("/signup");
  };

  const login = () => {
    Navigate("/login");

    
  };
  return (
    //   <>
    // <div className="HomePage">
    //     <div className="headerimg">
        
      
    //     </div>
    // </div>
    // </>
    
    <div className = "head-text">
      <div className = "head-image">
      <img
          id="backgroundimg"
          src="https://whatsnewinpublishing.com/wp-content/uploads/2019/10/Social_media_icons.jpg" alt="#"
        /> 
    
      </div>
        <div class='text-on-image'>
        <h1 > Welcome To Social Media </h1>
        <button  className="buttonHome" onClick={login} > Login </button>
      <button  className="buttonHome" onClick={register} > Register </button>
      
        </div>
    </div>

  );
}

export default Home;






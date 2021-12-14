import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./style.css";

const Coment =()=>{
    let id = useParams().id;
    const navigate = useNavigate();
    const state = useSelector((state) => {
      return state;
    });
    const [post, setPost] = useState([]);
    const [comment, setComment] = useState([]);
    const [likes, setLikes] = useState([]);

    const getData = async () => {
        let res = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/getcomment/${id}`,
          {
            headers: { Authorization: `Bearer ${state.signIn.token}` },
          }
        );
}

}
export default Coment;
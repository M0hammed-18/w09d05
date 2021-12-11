import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./style.css";

const Post = () => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const [post, setPost] = useState([]);
    const [local, setLocal] = useState("");
  

    

      const allpost = async () => {
        const result = await axios.get(`${BASE_URL}/showPost`, {
    
          headers: {
            Authorization: `Bearer ${local}`,
          },
        });
        setPost(result.data);
      };
      useEffect(() => {
        const savedToken = localStorage.getItem("token");
        setLocal(savedToken);
        allpost();
      }, []);
  return (
    <>
    <h1>kkk</h1>
    {post.map((e)=>{
        <ul>
            <li>
        {e.img}
        </li>
        </ul>
    })}
    </>
  );
};
export default Post;

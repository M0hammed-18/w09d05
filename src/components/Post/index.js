import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
import "./style.css";

const Post = () => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const [post, setPost] = useState([]);
    const [local, setLocal] = useState("");
    const [img, setImg] = useState("");
    const [desc, setDesc] = useState("");
    const [postUpdated, setPostUpdated] = useState("");

    const state = useSelector((state) => {
      return state;
    });
    useEffect(() => {
      allpost();
    }, []);
    

      const allpost = async () => {
        try {
          const id = localStorage.getItem(state);
        const result = await axios.get(`${BASE_URL}/showPost`, {
    
          headers: {
            Authorization: `Bearer ${local}`,
          },
        });
        setPost(result.data);
      }catch (err) {
        console.log(err);
      }
      };

      const insertPost = async () => {
        try {
          const userId = localStorage.getItem("ID");
          const id = localStorage.getItem("ID");
          //console.log("the s  " + state.tasks.taskAdd);
          const result = await axios.post(
            `http://localhost:4000/createpost`,
            {
              img,
              desc,
              
            },
            {
              headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
            }
          );
          allpost();
        } catch (err) {
          console.log(err);
        }
      };
   
  return (
    <>
    <h2>posts</h2>
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

import React from "react";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { logout1 } from "../../reducers/login";

const Post = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [task, setTask] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => {
        return state;
      });
      console.log(state.signIn.token);

  useEffect(() => {
    taskshow();
  }, []);

  const taskshow = async () => {
    const result = await axios.get(`${BASE_URL}/showPost/`);
    setTask(result.data);
  };


  const del = async (_id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/deletePost/${_id}`,{
        headers: {
          Authorization: `Bearer ${state.signIn.token}`,
        },
      });
      console.log(res,"gg");
      taskshow();
    } catch (error) {
      console.log(error,"this err");
    }
  };

  const [newtask, setNewtask] = useState("");
  const [newImg, setNewImg] = useState("");

  const addtask = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/createpost`, {
       desc:newtask, 
       img: newImg,
        
      },{
        headers: {
          Authorization: `Bearer ${state.signIn.token}`,
        },
      });
      taskshow();
    } catch (error) {
      console.log(error);
    }
  };

  const updatePost = async(id)=>{
  // console.log(id.target.value);
   const res = await axios.put(
        `${BASE_URL}/desupdate/${id}`,
        {
          desc:newtask 
        },
        {
          headers: {
            Authorization: `Bearer ${state.signIn.token}`,
          },
        }
      );
      taskshow();
    }
    const [newcomment, setNewComment] = useState([]);
    const addcomment = async (postId) => {
      try {
        const res = await axios.post(
          `${BASE_URL}/addcomment`,
          {
            desc: newcomment,
            postId: postId,
          },
          {
            headers: {
              Authorization: `Bearer ${state.signIn.token}`,
            },
          }
        );
        taskshow();
      } catch (error) {
        console.log(error);
      }
    };
  
    const addlike = async postId => {
      try {
        const res = await axios.post(
          `${BASE_URL}/addLike`,
          {
            postId: postId,
          },
          {
            headers: {
              Authorization: `Bearer ${state.signIn.token}`,
            },
          }
        );
        taskshow();
      } catch (error) {
        console.log(error);
      }
    };

    const logout = () => {
      dispatch(logout1({role:"",token:""}))
      localStorage.clear();
      navigate("/");
    };
 

  return (

    <><button id="logbut"
    onClick={logout}>Exit</button>
    <h2>Post</h2>
    
    <div className="posthome">
      
      <input
        onChange={(e) => {
          setNewtask(e.target.value);
         
        }}
        placeholder="add Post Desc"
      />
      <input
        onChange={(e) => {
          setNewImg(e.target.value);
         
        }}
        placeholder="add Post Img"
      />{" "}
      <button onClick={addtask}>add</button>

      
      <div className="post">
      {task.map((e) => (
        <div className="listphoto">
        <ul>
          <li>
           <h3> {e.desc} </h3>
            <input 
        onChange={(e) => {
          setNewtask(e.target.value);
         
        }}
        placeholder="update Post Desc"
      />
            <button id="ubdatedesc" onClick={()=>updatePost(e._id)}>Update</button>
            <img src={e.img}/>
            {e.commentId.map(s => (
         <>
          <p> Comment: {s.desc}</p>
         </>
        ))} 
        <input
                    className="npi"
                    onChange={e => {
                      setNewComment(e.target.value);
                    }}
                    placeholder="add comment"
                  />
                  <button className="addBTN" onClick={()=> addcomment(e._id)}>
                    add
                  </button>
                  <button onClick={() => addlike(e._id)}>Like </button>
                  <h3>{e.like.length}</h3>
            <button
              onClick={() => {
                del(e._id);
              }}
            >
              delete
            </button>
            
          </li>
          {console.log()}{" "}
        </ul>
        

         
        </div>
      ))}
      
      </div>
    </div>
    </>
  );
};

export default Post;

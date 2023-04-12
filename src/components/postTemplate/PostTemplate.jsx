import "./postTemplate.css";
import { MoreVert } from "@mui/icons-material";
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import { Users } from "../../dummyData";
import React, { useEffect, useState } from "react";

import { db } from "../../firebase";

import {
  getDocs,
  collection,
  serverTimestamp,
  doc,
  deleteDoc,
} from "firebase/firestore";


const PostTemplate = ({ post }) => {
  console.log(post);
  // const getUser = (id) =>
  // Users.filter(u => u.id===id)[0]?.username
  const [data, setData] = useState([]);
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  
  const getUser = (id) => Users.find((user) => user.id === id)?.username;
  const getUserpics = (id) =>
    Users.find((user) => user.id === id)?.profilePicture;

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete?")){
        await deleteDoc(doc(db, "posts", id));
        setData(data.filter((item) => item.id !== id));
      }
    } catch (err) {
      console.log(err);
    }
  };
  

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        querySnapshot.forEach((doc) => {
          // console.log("MAIN", doc);
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  console.log(data);


  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="postTemplate">
      <div className="postTemplateContainer">
        <div className="postTemplateTop">
          <div className="postTemplateTopLeft">
            <img src={data.img} alt="pic" className="postTemplateProfilePic" />
            <span className="postTemplateUsername">{getUser(post.userId)}</span>
            <span className="postTemplateDate">{post.date}</span>
          </div>
          <p>{post.post}</p>
          <div className="postTopRight">
            <span><MoreVert />  <DeleteSharpIcon Size="" color="red" onClick={() => handleDelete()} />
            </span>
          </div>
        </div>
        <div className="postTemplateCenter">
          <span className="postTemplateText">{post.text}</span>
          <div className="deleteButton" onClick={() => handleDelete(data.id)} style={{
          
          }}>
          </div>
          <div
            style={{
              border: "1px solid red",
              height: "10rem",
              width: "10rem",
              backgroundColor: `url(${post.img})`,
            }}
          ></div>
        </div>
        <div className="postTemplateBottom">
          <div className="postTemplateBottomLeft">
            <img
              src="assets/postpics/pos3.jpg"
              onClick={likeHandler}
              alt=""
              className="likeIcon"
            />
            <img src="assets/like.png" alt="" className="likeIcon" />
            <span className="postTemplateLikeCounter">{like} Likes</span>
          </div>
          <div className="postTemplateBottomRight">
            <span className="postTemplateCommentText">
              {post.comment} Comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTemplate;

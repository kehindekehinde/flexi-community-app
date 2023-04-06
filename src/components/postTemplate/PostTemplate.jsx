import "./postTemplate.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";

console.log()
const PostTemplate = ({ post }) => {
    // const getUser = (id) => 
    // Users.filter(u => u.id===id)[0]?.username

const getUser = (id) => Users.find(user => user.id === id)?.username
const getUserpics = (id) => Users.find(user => user.id === id)?.profilePicture
const [like, setLike]=useState(post.like)
const[isLiked,setIsLiked] = useState(false)

const likeHandler =()=> {
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
}
  return (
    <div className="postTemplate">
      <div className="postTemplateContainer">
        <div className="postTemplateTop">
          <div className="postTemplateTopLeft">
            <img
              src={getUserpics(post.userId)}
              alt="pic"
              className="postTemplateProfilePic"
            />
            <span className="postTemplateUsername">
              {getUser(post.userId)}

            </span>
            <span className="postTemplateDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postTemplateCenter">
          <span className="postTemplateText">{post.text}</span>
          <img src={post.photo} alt="pic" className="postTemplatePic" />
        </div>
        <div className="postTemplateBottom">
          <div className="postTemplateBottomLeft">
            <img src="assets/postpics/pos3.jpg" onClick={likeHandler} alt="" className="likeIcon" />
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

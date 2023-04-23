import "./postTemplate.css";
import { MoreVert } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import React from "react";
import { useContext } from "react";
import PostContext from "../../pages/contexts/Postcontext";

const PostTemplate = ({ doc, getPostId }) => {
  const { deleteHandler } = useContext(PostContext);

  return (
    <div className="postTemplate">
      <div className="postTemplateContainer">
        <div className="postTemplateTop">
          <div className="postTemplateTopLeft">
            <img src={""} alt="pic" className="postTemplateProfilePic" />
            <span className="postTemplateUsername">{doc.title}</span>
            <span className="postTemplateDate">{}</span>
          </div>

          <div className="postTopRight">
            <span>
              <MoreVert />
              <EditIcon onClick={(e) => getPostId(doc.id)} />{" "}
              <DeleteSharpIcon
                onClick={(e) => deleteHandler(doc.id)}
                style={{ fontSize: "30px", color: "red" }}
              />
            </span>
          </div>
        </div>
        <div className="postTemplateCenter">
          <span className="postTemplateText">{}</span>
          <div className="deleteButton" style={{}}></div>
          <img src={doc.imgUrl} alt="" width="300px" height={"auto"} />
        </div>
        <div className="postTemplateBottom">
          <div className="postTemplateBottomLeft">
            <img
              src="assets/postpics/pos3.jpg"
              // onClick={likeHandler}
              alt=""
              className="likeIcon"
            />
            <img src="assets/like.png" alt="" className="likeIcon" />
            <span className="postTemplateLikeCounter">{} Likes</span>
          </div>
          <div className="postTemplateBottomRight">
            <span className="postTemplateCommentText">{} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTemplate;

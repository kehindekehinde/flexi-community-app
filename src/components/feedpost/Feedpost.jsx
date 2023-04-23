import "./feedpost.css";
import Share from "../share/Share";
import PostTemplate from "../postTemplate/PostTemplate";
import React, { useContext, useState } from "react";
import PostContext from "../../pages/contexts/Postcontext";

const Feedpost = () => {
  const { posts } = useContext(PostContext);
  const [currentPost, setCurrentPost] = useState({});

  const [postId, setPostId] = useState("");
  const getPostIdHandler = (id) => {
    console.log("the Id of dumentt to btw", id);
    setPostId(id);
  };

  return (
    <div className="feedpost">
      <div className="feedpostContainer">
        <Share
          id={postId}
          setPostId={setPostId}
          setCurrentPost={setCurrentPost}
          currentPost={currentPost}
        />
        {posts.map((doc) => {
          return (
            <PostTemplate
              key={doc.id}
              doc={doc}
              getPostId={getPostIdHandler}
              setCurrentPost={setCurrentPost}
              currentPost={currentPost}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Feedpost;

import "./share.css";
import React, { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import DriveFolderUploadSharpIcon from "@mui/icons-material/DriveFolderUploadSharp";
import { useContext } from "react";
import { Label, Room, EmojiEmotions } from "@mui/icons-material";
import PostDataService from "./PostDataService";
import PostContext from "../../pages/contexts/Postcontext";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const Share = ({ id, setPostId }) => {
  const [title, setTitle] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const { getPosts } = useContext(PostContext);

  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleShare = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!!imageUpload) {
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {});
      });
    }

    if (!title) {
      alert("Please fill all fields");
      return;
    }
    let newPost = {
      title,
      timestamp: Date.now(),
    };

    try {
      if (id) {
        await PostDataService.updatePost(id, newPost);
        setPostId("");
        getPosts();

        setMessage({ error: false, msg: "successfully Updated Post" });
      } else {
        if (!!imageUpload) {
          const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
          await uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then(async (url) => {
              newPost.imgUrl = url;
              await PostDataService.addPosts(newPost);
              getPosts();
              window.alert("Post created successfully");
            });
          });
        } else {
          await PostDataService.addPosts(newPost);
          getPosts();
          window.alert("Post created successfully");
        }
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
    console.log("error", message);
    setTitle("");
    setImageUpload("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await PostDataService.getPost(id);
      setTitle(docSnap.data().title);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    if (id) {
      editHandler();
    }
    //eslint-disable-next-line
  }, [id]);

  return (
    <React.Fragment>
      <div>
        <div className="share">
          <div className="shareContainer">
            <form action="" onSubmit={handleShare}>
              <div className="shareImageSpace">
                {imageUpload && (
                  <div>
                    <img
                      alt="not found"
                      width={"250px"}
                      src={URL.createObjectURL(imageUpload)}
                    />
                    <br />
                    <button onClick={() => setImageUpload(null)}>
                      <ClearIcon fontSize="40" />
                      Remove
                    </button>
                  </div>
                )}
              </div>
              <div className="shareTop">
                <img
                  className="shareProfilePic"
                  src="/assets/postprofiles/postprofile3.jpg"
                  alt=""
                />
                <input
                  placeholder="what is on your mind?"
                  className="shareInput"
                  type="text"
                  value={title}
                  id="post"
                  onChange={handleInput}
                />
              </div>
              <hr className="shareHr" />
              <div className="shareBottom">
                <div className="shareOptions">
                  <div className="shareOption">
                    <label htmlFor="file">
                      <DriveFolderUploadSharpIcon
                        className="shareIcon"
                        style={{ color: "blue" }}
                      />
                      <span className="shareOptionText">Photo/Video</span>
                    </label>

                    <input
                      type="file"
                      id="file"
                      name="myImage"
                      onChange={(e) => {
                        setImageUpload(e.target.files[0]);
                      }}
                      style={{ display: "none" }}
                    />
                  </div>
                  <div className="shareOption">
                    <Label className="shareIcon" style={{ color: "brown" }} />
                    <span className="shareOptionText">Tag</span>
                  </div>
                  <div className="shareOption">
                    <Room className="shareIcon" htmlColor="green" />
                    <span className="shareOptionText">Location</span>
                  </div>
                  <div className="shareOption">
                    <EmojiEmotions
                      className="shareIcon"
                      htmlColor="Goldenrod"
                    />
                    <span className="shareOptionText">Feelings</span>
                  </div>
                </div>
                <button type="submit" className="shareButton">
                  Share
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Share;
// disabled={per !== null && per < 100}
// {message?.msg&&(<Alert variant={message?.error?"danger":"success"} dismissible onClose={()=> setMessage(" ")}>{message?.msg}</Alert>)}
// {message?.error && <Alert variant= {message?.error ? "danger": "success" } dismissible onClose= {()=> setMessage("")}> {message?.msg} </Alert> )}

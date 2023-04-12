import "./share.css";
import React, { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import DriveFolderUploadSharpIcon from "@mui/icons-material/DriveFolderUploadSharp";
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  setDoc,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { auth, db, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// import {} from "material-icons";
import { Label, Room, EmojiEmotions } from "@mui/icons-material";

const Share = () => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);

  useEffect(() => {
    const name = new Date().getTime() + file.name;
    const storageRef = ref(storage, "file.name");
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is" + progress + "% done");
        setPerc(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("upload is paused");
            break;
          case "running":
            console.log("upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setData((prev) => ({ ...prev, img: downloadURL }));
        });
      }
    );
    const uploadFile = () => {};
    file && uploadFile();
  }, [file]);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, post: value });
    console.log(data);
  };

  const handleShare = async (e) => {
    e.preventDefault();

    try {
      const post = uuidv4();
      await setDoc(doc(db, "posts", post.id), {
        //  the input properties
        ...data,
        timeStamp: serverTimestamp(),
      });
    } catch (err) {
      console.log(err, `error`);
    }
  };

  return (
    <div>
      <div className="share">
        <div className="shareContainer">
          <form action="">
            <div className="shareImageSpace">
              {file && (
                <div>
                  <img
                    alt="not found"
                    width={"250px"}
                    src={URL.createObjectURL(file)}
                  />
                  <br />
                  <button onClick={() => setFile(null)}>
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
                    onChange={(event) => {
                      console.log(event.target.files[0]);
                      setFile(event.target.files[0]);
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
                  <EmojiEmotions className="shareIcon" htmlColor="Goldenrod" />
                  <span className="shareOptionText">Feelings</span>
                </div>
              </div>
              <button
                disabled={per !== null && per < 100}
                type="submit"
                className="shareButton"
                onClick={handleShare}
              >
                Share
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Share;

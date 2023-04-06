import "./share.css";
// import {} from "material-icons";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

const Share = () => {
  return (
    <div>
      <div className="share">
        <div className="shareContainer">
          <div className="shareTop">
            <img className="shareProfilePic" src="/assets/postprofiles/postprofile3.jpg" alt="" />
            <input placeholder="what is on your mind?" className="shareInput" />
          </div>
          <hr className="shareHr"/>
          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
              <PermMedia className="shareIcon" />
                <span className="shareOptionText">Photo/Video</span>
              </div>
              <div className="shareOption" >
              <Label className="shareIcon" style={{color:"red"}}/>
                <span className="shareOptionText">Tag</span>
              </div>
              <div className="shareOption">
              <Room className="shareIcon" htmlColor="green"/>
                <span className="shareOptionText">Location</span>
              </div>
              <div className="shareOption">
              <EmojiEmotions className="shareIcon" htmlColor="Goldenrod" />
                <span className="shareOptionText">Feelings</span>
              </div>
              </div>
              <button className="shareButton">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;

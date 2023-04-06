import "./profile.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Feedpost from "../../components/feedpost/Feedpost";
import Rightbar from "../../components/rightbar/Rightbar";

const Profile = () => {
  return (
    <div>
      Profile
      <Header />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
        <div className="profileRightTop">
        <div className="profileCover">
        <img src="./assets/profilepost.jpg" alt="" className="profileBackgroundPic" />
        <img src="./assets/profilepost.jpg" alt="" className="profileUserPic" />
        </div>
        </div>
        <div className="profileInfo">
        <h4 className="profileInfoName">may beemer</h4>
        <span className="profileInfoDesc">mary gibbon hello </span>
        </div>

        <div className="profileRightBottom">
        <Feedpost />
        <Rightbar />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

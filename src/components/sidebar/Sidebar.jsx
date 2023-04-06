import "./sidebar.css";
import { School } from "@mui/material";
import {
  Bookmark,
  Group,
  HelpOutline,
  WorkOutline,
  Event,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarContainer">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmark</span>
          </li>
        </ul>
        <button className="sidebarbutton">Show More</button>
        <hr className="sidebarHr" />
        <ul classNa  me="sidebarFriendList">
          <li className="sidebarFriend">
            <img className="sidebarFriendpics" src="./assets/postprofiles/postprofile1.jpg" />
            <span className="sidebarFriendName">Mary Powell</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendpics" src="./assets/postprofiles/postprofile1.jpg" />
            <span className="sidebarFriendName">Mary Powell</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

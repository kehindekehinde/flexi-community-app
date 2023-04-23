import "./sidebar.css";
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
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Group</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">HelpOutline</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">WorkOutline</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Event</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Event</span>
          </li>
        </ul>
        <button className="sidebarbutton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              className="sidebarFriendpics"
              src="./assets/postprofiles/postprofile1.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Mary Powell</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendpics"
              src="./assets/postprofiles/postprofile1.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Mary Powell</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

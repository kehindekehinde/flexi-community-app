import React from "react";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerLeftside">
        <span className="headerLogo">FIP COMMUNITY</span>
      </div>
      <div className="headerCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            type="text"
            placeholder="search for post, image, text or video "
            className="searchInput"
          />
        </div>
      </div>
      <div className="headerRightside">
        <div className="headerLinks">
          <span className="headerLink">Homepage</span>
          <span className="headerLink">Timeline</span>
        </div>
        <div className="headerIcons">
          <div className="headerIconItem">
            <Person />
            <span className="headerIconBadge">1</span>
            <div className="headerIconItem">
              <Chat />
              <span className="headerIconBadge">1</span>
            </div>
            <div className="headerIconItem">
              <Notifications />
              <span className="headerIconBadge">1</span>
            </div>
          </div>
          <div className="headerImg">
          <img src="/assets/postpics" alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

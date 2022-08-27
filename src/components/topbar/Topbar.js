import React from 'react'
import "../topbar/topbar.css"
import { Link } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
export default function Topbar() {
  return (
    <div>
      <div className="topbarContainer">
        <div className="topbarLeft">

          <Link to="/">
            <span className="logo">Facebook</span>
          </Link>


        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input
              placeholder="Search for friend, post or video"
              className="searchInput"
            />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>

            <div>
            
            <Link to="/login">
              
              <ExitToAppIcon/> 
              
            </Link>
            
            
            </div>
            

          <Link to="/profile">
            <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
          </Link>

        </div>
      </div>
    </div>
  )
}




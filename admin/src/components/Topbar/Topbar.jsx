import React from 'react'
import './topbar.scss'
import {Language, NotificationsNone, Settings} from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?cs=srgb&dl=pexels-hitesh-choudhary-879109.jpg&fm=jpg"
            alt="code"
            className='topAvatar'
          />
        </div>
      </div>
    </div>
  );
}

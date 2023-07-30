import React, { useState } from "react";
import "./navbar.scss";
import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(document.documentElement.scrollTop === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/" className="link">
            {" "}
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span>TV Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span>Movies</span>
          </Link>
          <Link to="/new" className="link">
            <span>New and Popular</span>
          </Link>
          <Link to="/myList" className="link">
            <span>My List</span>
          </Link>
          <Link to="/browseLanguage" className="link">
            <span>Browse by Languages</span>
          </Link>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>Children</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Log out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

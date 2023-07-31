import React from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";

import AnalyticsIcon from "@mui/icons-material/Analytics";
import {
  ManageAccounts,
  Person2Outlined,
  StackedBarChartOutlined,
  LineStyle,
  TrendingUp,
  ReportGmailerrorred,
  Message,
  Feedback,
  Email,
  AttachMoney,
  MovieFilter,
} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <AnalyticsIcon className="sidebarIcon" /> Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" /> Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <Person2Outlined className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/movies" className="link">
              <li className="sidebarListItem">
                <MovieFilter className="sidebarIcon" /> Movies
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" /> Transaction
            </li>
            <li className="sidebarListItem">
              <StackedBarChartOutlined className="sidebarIcon" /> Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Email className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <Feedback className="sidebarIcon" /> Feedback
            </li>
            <li className="sidebarListItem">
              <Message className="sidebarIcon" /> Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <ManageAccounts className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <AnalyticsIcon className="sidebarIcon" /> Analytics
            </li>
            <li className="sidebarListItem">
              <ReportGmailerrorred className="sidebarIcon" /> Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

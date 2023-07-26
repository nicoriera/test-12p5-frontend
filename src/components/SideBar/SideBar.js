import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <FontAwesomeIcon icon="fa-solid fa-gauge-high" />
        <h1>Dashboard</h1>
      </div>
      <ul className="sidebar_links_project">
        <div className="sidebar_link">
          <FontAwesomeIcon icon="fa-house" />
          <li>Home</li>
        </div>
        <div className="sidebar_link">
          <FontAwesomeIcon icon="fa-address-card" />
          <li>Profile</li>
        </div>
        <div className="sidebar_link">
          <FontAwesomeIcon icon="fa-message" />
          <li>Messages</li>
        </div>
        <div className="sidebar_link">
          <FontAwesomeIcon icon="fa-clock" />
          <li>History</li>
        </div>
        <div className="sidebar_link">
          <FontAwesomeIcon icon="fa-list-check" />
          <li>Tasks</li>
        </div>
        <div className="sidebar_link">
          <FontAwesomeIcon icon="fa-people-group" />
          <li>Communities</li>
        </div>
      </ul>
      <ul className="sidebar_links_settings">
        <div className="sidebar_link">
          <FontAwesomeIcon icon="fa-gear" />
          <li>Settings</li>
        </div>
        <div className="sidebar_link">
          <FontAwesomeIcon icon="fa-circle-question" />
          <li>Support</li>
        </div>
        <div className="sidebar_link">
          <FontAwesomeIcon icon="fa-shield" />
          <li>Privacy</li>
        </div>
      </ul>
    </div>
  );
};

export default SideBar;

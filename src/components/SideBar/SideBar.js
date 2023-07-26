import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = ({ isOpen }) => {
  const [hideText, setHideText] = useState(false);

  const handleHeaderClick = () => {
    setHideText(!hideText);
  };

  return (
    <div className={isOpen ? "sidebar open" : "sidebar"}>
      <div className="sidebar_header" onClick={handleHeaderClick}>
        <FontAwesomeIcon icon="fa-solid fa-gauge-high" />
        {hideText ? null : <h1>Dashboard</h1>}
      </div>
      <ul className="sidebar_links_project">
        <div className="sidebar_link">
          <FontAwesomeIcon icon="fa-house" />
          {hideText ? null : <li>Home</li>}
        </div>
        <div className="sidebar_link">
          <FontAwesomeIcon icon="fa-address-card" />
          {hideText ? null : <li>Profile</li>}
        </div>
        <div className="sidebar_link">
          <FontAwesomeIcon icon="fa-message" />
          {hideText ? null : <li>Messages</li>}
        </div>
        <div className="sidebar_link">
          <FontAwesomeIcon icon="fa-clock" />
          {hideText ? null : <li>History</li>}
        </div>
        <div className="sidebar_link">
          <FontAwesomeIcon icon="fa-list-check" />
          {hideText ? null : <li>Tasks</li>}
        </div>
        <div className="sidebar_link">
          <FontAwesomeIcon icon="fa-people-group" />
          {hideText ? null : <li>Communities</li>}
        </div>
      </ul>
      <ul className="sidebar_links_settings">
        <div className="sidebar_link">
          <FontAwesomeIcon icon="fa-gear" />
          {hideText ? null : <li>Settings</li>}
        </div>
        <div className="sidebar_link">
          <FontAwesomeIcon icon="fa-circle-question" />
          {hideText ? null : <li>Support</li>}
        </div>
        <div className="sidebar_link">
          <FontAwesomeIcon icon="fa-shield" />
          {hideText ? null : <li>Privacy</li>}
        </div>
      </ul>
    </div>
  );
};

export default SideBar;

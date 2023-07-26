import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import avatar from "../../assets/avatar.jpg";

const NavBar = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_mobil">
        <div className="hamburger_logo_mobil">
          <FontAwesomeIcon icon="fa-bars" />
        </div>
        <div className="logo-avatar">
          <div className="search_logo">
            <FontAwesomeIcon icon="fa-magnifying-glass" />
          </div>
          <img src={avatar} alt="Avatar" className="avatar" />
        </div>
      </div>
      <div className="navbar_desktop">
        <div className="logo_input">
          <div className="search_logo">
            <FontAwesomeIcon icon="fa-magnifying-glass" />
          </div>
          <input type="text" placeholder="" />
        </div>
        <div className="avatar_name">
          <FontAwesomeIcon icon="fa-bell" />
          <img src={avatar} alt="Avatar" className="avatar" />
          <h2>Morgan Oakley</h2>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

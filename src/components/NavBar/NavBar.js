import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import avatarMorgan from "../../assets/avatar-morgan.jpg";

const NavBar = ({ handleHamburgerClick, handleModalClick }) => {
  return (
    <div className="navbar_container">
      <div className="navbar_mobil">
        <div className="hamburger_logo_mobil" onClick={handleHamburgerClick}>
          <FontAwesomeIcon icon="fa-bars" />
        </div>
        <div className="logo_avatar">
          <div className="search_logo">
            <FontAwesomeIcon icon="fa-magnifying-glass" />
          </div>
          <img src={avatarMorgan} alt="Avatar" className="avatar" />
        </div>
      </div>
      <div className="navbar_desktop">
        <div className="navbar_header">
          <div className="logo_input">
            <div className="search_logo">
              <FontAwesomeIcon icon="fa-magnifying-glass" />
            </div>
            <input type="text" placeholder="" />
          </div>
          <div className="avatar_name">
            <FontAwesomeIcon icon="fa-bell" />
            <img src={avatarMorgan} alt="Avatar" className="avatar" />
            <h2>Morgan Oakley</h2>
          </div>
        </div>
        <div className="navbar_footer">
          <div className="navbar_footer_avatar_text">
            <img src={avatarMorgan} alt="Avatar" className="avatar" />
            <div className="navbar_footer_text">
              <p>Hi there,</p>
              <h2>Morgan Oakley (@morgan)</h2>
            </div>
          </div>
          <div className="navbar_footer_buttons">
            <button className="button" onClick={handleModalClick}>
              New
            </button>
            <button className="button">Share</button>
            <button className="button">Upload</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

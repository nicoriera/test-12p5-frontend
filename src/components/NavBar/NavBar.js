import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import avatar from "../../assets/avatar.jpg";

const NavBar = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_mobil">
        <div className="hamburger_logo_mobil">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="logo-avatar">
          <div className="search_logo">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <img src={avatar} alt="Avatar" className="avatar" />
        </div>
      </div>
      <div className="navbar_desktop">
        <div className="logo_input">
          <div className="search_logo">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <input type="text" placeholder="" />
        </div>
        <div className="avatar_name">
          <FontAwesomeIcon icon={faBell} />
          <img src={avatar} alt="Avatar" className="avatar" />
          <h2>Morgan Oakley</h2>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

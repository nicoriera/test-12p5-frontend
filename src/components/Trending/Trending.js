import React from "react";

import avatarTegan from "../../assets/avatar-tegan.jpg";
import avatarMorgan from "../../assets/avatar-morgan.jpg";
import avatarKendall from "../../assets/avatar-kendall.jpg";
import avatarAlex from "../../assets/avatar-alex.png";

const Trending = () => {
  return (
    <div>
      <h1>Trending</h1>
      <div className="trendings">
        <div className="trending">
          <img src={avatarTegan} alt="random" className="avatar" />
          <div className="trending_info">
            <h2>@tegan</h2>
            <p>World Peace Builder</p>
          </div>
        </div>
        <div className="trending">
          <img src={avatarMorgan} alt="random" className="avatar" />
          <div className="trending_info">
            <h2>@morgan</h2>
            <p>Supr Cool Project</p>
          </div>
        </div>
        <div className="trending">
          <img src={avatarKendall} alt="random" className="avatar" />
          <div className="trending_info">
            <h2>@kendall</h2>
            <p>Life Changing App</p>
          </div>
        </div>
        <div className="trending">
          <img src={avatarAlex} alt="random" className="avatar" />
          <div className="trending_info">
            <h2>@alex</h2>
            <p>No Traffic Maker</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;

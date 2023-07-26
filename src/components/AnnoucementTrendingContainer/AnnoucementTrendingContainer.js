import React from "react";
import Announcement from "../Announcement/Announcement";
import Trending from "../Trending/Trending";

const AnnoucementTrendingContainer = () => {
  return (
    <div className="annoucements_trending_container">
      <div className="announcements_container">
        <Announcement />
      </div>
      <div className="trending_container">
        <Trending />
      </div>
    </div>
  );
};

export default AnnoucementTrendingContainer;

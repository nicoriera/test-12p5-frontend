import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = () => {
  return (
    <div className="card">
      <div className="card_background_white">
        <div className="card_header">
          <h2>Project 1</h2>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="card_footer_left">
          <FontAwesomeIcon icon="fa-star" />
          <FontAwesomeIcon icon="fa-eye" />
          <FontAwesomeIcon icon="fa-share-nodes" />
        </div>
      </div>
    </div>
  );
};

export default Card;

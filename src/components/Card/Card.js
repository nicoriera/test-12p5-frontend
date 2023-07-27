import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ removeCard, title, description }) => {
  return (
    <div className="card">
      <div className="card_background_white">
        <div className="card_header">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="card_footer">
          <div className="card_footer_right">
            <FontAwesomeIcon icon="fa-trash" onClick={removeCard} />
          </div>
          <div className="card_footer_left">
            <FontAwesomeIcon icon="fa-star" />
            <FontAwesomeIcon icon="fa-eye" />
            <FontAwesomeIcon icon="fa-share-nodes" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import Card from "../Card/Card";

const CardsContainer = () => {
  return (
    <div>
      <h1>Your projects</h1>
      <div className="card_container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardsContainer;

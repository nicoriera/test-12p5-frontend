import React, { useState } from "react";
import Card from "../Card/Card";
import cards from "../../data/data.json";

const CardsContainer = () => {
  const [cardsData, setCardsData] = useState(cards);

  const removeCard = (id) => {
    setCardsData((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  return (
    <div>
      <h1>Your projects</h1>
      <div className="card_container">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            removeCard={() => removeCard(card.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;

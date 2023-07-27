import React from "react";
import Card from "../Card/Card";

const CardsContainer = ({ cards, setCards }) => {
  const removeCard = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  return (
    <div>
      <h1>Your projects</h1>
      <div className="card_container">
        {cards.map((card) => (
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

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddCardModal = ({ setCards, closeModal }) => {
  const [newCard, setNewCard] = useState({ title: "", description: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCard((prevCard) => ({ ...prevCard, [name]: value }));
  };

  const addNewCard = () => {
    if (newCard.title && newCard.description) {
      const newCardWithId = { ...newCard, id: Date.now() };
      setCards((prevCards) => [...prevCards, newCardWithId]);
      setNewCard({ title: "", description: "" });
      closeModal();
    }
  };
  return (
    <div className="add_card_modal">
      <div className="add_card_form">
        <FontAwesomeIcon
          className="close_modal"
          icon="fa-circle-xmark"
          onClick={closeModal}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newCard.title}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newCard.description}
          onChange={handleInputChange}
        />
        <button className="button" onClick={addNewCard}>
          Add Card
        </button>
      </div>
    </div>
  );
};

export default AddCardModal;

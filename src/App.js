import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import AddCardModal from "./components/AddCardModal/AddCardModal";
import cardsData from "./data/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import SideBar from "./components/SideBar/SideBar";
import AnnoucementTrendingContainer from "./components/AnnoucementTrendingContainer/AnnoucementTrendingContainer";
import CardsContainer from "./components/CardsContainer/CardsContainer";

library.add(fas);

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAddCardModalOpen, setIsAddCardModalOpen] = useState(false);
  const [cards, setCards] = useState(cardsData);

  const handleHamburgerClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleModalClick = () => {
    setIsAddCardModalOpen(!isAddCardModalOpen);
  };

  return (
    <>
      <NavBar
        handleHamburgerClick={handleHamburgerClick}
        handleModalClick={handleModalClick}
      />
      <SideBar isOpen={isSidebarOpen} />
      <div className="main_content">
        <CardsContainer cards={cards} setCards={setCards} />
        <AnnoucementTrendingContainer />
        {isAddCardModalOpen ? (
          <AddCardModal
            setCards={setCards}
            closeModal={() => setIsAddCardModalOpen(false)}
          />
        ) : null}
        <button className="button_add_card_mobil" onClick={handleModalClick}>
          <FontAwesomeIcon icon="fa-circle-plus" />
        </button>
      </div>
    </>
  );
}

export default App;

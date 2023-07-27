import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faBars,
  faMagnifyingGlass,
  faBell,
  faEye,
  faShareNodes,
  faGaugeHigh,
  faHouse,
  faAddressCard,
  faMessage,
  faClock,
  faListCheck,
  faPeopleGroup,
  faGear,
  faCircleQuestion,
  faShield,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import SideBar from "./components/SideBar/SideBar";
import AnnoucementTrendingContainer from "./components/AnnoucementTrendingContainer/AnnoucementTrendingContainer";
import CardsContainer from "./components/CardsContainer/CardsContainer";

library.add(
  faStar,
  faBars,
  faMagnifyingGlass,
  faBell,
  faEye,
  faShareNodes,
  faGaugeHigh,
  faHouse,
  faAddressCard,
  faMessage,
  faClock,
  faListCheck,
  faPeopleGroup,
  faGear,
  faCircleQuestion,
  faShield,
  faTrash
);

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <NavBar handleHamburgerClick={handleHamburgerClick} />
      <SideBar isOpen={isSidebarOpen} />
      <div className="main_content">
        <CardsContainer />
        <AnnoucementTrendingContainer />
      </div>
    </>
  );
}

export default App;

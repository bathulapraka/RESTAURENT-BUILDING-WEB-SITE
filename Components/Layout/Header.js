import React from "react";
import meals from "../Images/Meals1.avif";
import "../Layout/Header.css";
import Headercart from "./HeaderCart";
import Paragraph from "../Summary/Summary";
import Dummy from "./Dummy Items";

const Header = (props) => {
  return (
    <>
      <header className="Header-things">
        <h1>Restaurant</h1>
        <Headercart onClick={props.Showing} /> 
      </header>

      <div>
        <img src={meals} alt="Food-items" className="Meals1"></img>
        <Paragraph />
      </div>
      <Dummy />
    </>
  );
};
export default Header;

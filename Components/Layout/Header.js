import React from "react";
import meals from "../Images/Meals1.avif";
import "../Layout/Header.css";
import Headercart from "./HeaderCart";
import Paragraph from "../Summary/Summary";
import Dummy from "./Dummy Items";
import restaurentlogo from "../MENU/MenuImages/RestaurentName.jpg";

const Header = (props) => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu-section");
    menuSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="Header-things">
        <img
          src={restaurentlogo}
          alt="Logo-rest"
          style={{
            width: "260px",
            height: "120px",
            marginLeft: "40px",
            backgroundColor: "black",
            borderRadius: "10px",
            filter:
              "invert(100%) sepia(100%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
          }}
        ></img>
        <h3 className="Menu-items">Menu</h3>
        <h3 className="About-items">About</h3>
        <h3 onClick={scrollToMenu} className="New-product">New Products</h3>
        <h3 className="Sgn-in">Sign in</h3>

        <Headercart onClick={props.Showing} />
      </header>
      <div>
        <img src={meals} alt="Food-items" className="Meals1"></img>
        <Paragraph />
      
      </div>
      <div id="menu-section"></div>
      <Dummy />
    </>
  );
};
export default Header;

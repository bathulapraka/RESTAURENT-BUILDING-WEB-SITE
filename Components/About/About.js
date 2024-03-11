import React from "react";
import "../About/About.css";
import shef from "../About/AboutImage/pngtree-chef-preparing-a-dish-in-a-restaurant-picture-image_2482776.jpg";
const About = (props) => {
  return (
    <div className="">
      <h1 className="about"> ABOUT</h1>
      <img src={shef} alt="restaurent" className="shefs"></img>
      <div className="All-parag">
      <h1 className="About-us">ABOUT US</h1>
      <p className="para-about">
        Welcome to our restaurant! We pride ourselves on serving delicious
        high-quality meals made with fresh, locally-sourced ingredients.
      </p>
      <p className="our">
        {" "}
        Our chefs are passionate about creating memorable dining experiences for
        our guests.
      </p>

      <p className="At-rest">
        At our restaurant, we believe in sustainability and supporting local
        farmers and producers. That's why we source our ingredients
      </p>
      <p className="pride">We pride ourselves on serving delicious,</p>
      <p className="pride">
        Our menu features a variety of dishes to suit every taste, from hearty
        burgers to fresh salads and indulgent desserts.
      </p>
      <p className="pride">
        Come visit us today and experience the taste of our passion for food!
      </p>
    

    
      </div>
     
    </div>
  );
};

export default About;

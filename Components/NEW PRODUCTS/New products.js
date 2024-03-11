import React from "react";
import Sun from "../NEW PRODUCTS/NEWPRODUCTIMAGES/Sun logo.jpg";
import "../NEW PRODUCTS/NewProduct.css";
import Salad from "../NEW PRODUCTS/NEWPRODUCTIMAGES/Guacamole-salad-5.jpg";
import chcken from "../NEW PRODUCTS/NEWPRODUCTIMAGES/Chicken-Salad-SQ.jpg";
import vegan from "../NEW PRODUCTS/NEWPRODUCTIMAGES/vegan_moussaka_52413_16x9.jpg";
import millianiarie from "../NEW PRODUCTS/NEWPRODUCTIMAGES/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg";
import pasta from "../NEW PRODUCTS/NEWPRODUCTIMAGES/pasta.jpeg";

import Pork from "../NEW PRODUCTS/NEWPRODUCTIMAGES/sweet-and-sour-crunchy-pork-salad-141419-1.jpg";
const NewProductsMenu = (props) => {
  return (
    <div>
      <img src={Sun} alt="Sunlogo" className="Sun-image"></img>
      <h2 className="Our">Our Restaurent</h2>
      <h1 className="Menu">MENU</h1>
      <h1 className="hell"></h1>

      <div className="All-dish">
        <h1 className="salad">Salads</h1>
        <div className="All-items">
          <p className="para"> GUACAMOLE SALAD </p>
          <p className="price">$45.00</p>
          <img src={Salad} alt="sala" className="salad-item"></img>
          <p className="Paragraph">
            Excepteur sint occaecat cupidatat non
            <br /> proident, sunt in culpa qui official
          </p>

          <p className="Theory"></p>

          <p className="Chick">CHICKEN SALAD</p>
          <p className="price">$39.00</p>

          <img src={chcken} alt="chicke" className="Chicken"></img>

          <p className="Paragraph">
            Chicken salad is a delicious dish made
            <br /> with cooked chicken
            <br /> vegetables, and a creamy dressing.
          </p>

          <p className="Theory"></p>

          <p className="Chick">PORK SALAD</p>
          <p className="price">$52.09</p>

          <img src={Pork} alt="por" className="pork-sald"></img>
          <p className="Paragraph">
            Pork salad is a savory and satisfying dish <br />
            that combines tender pieces of cooked <br />
            pork with crisp vegetables
          </p>
          <p className="Theory"></p>

          <img src={vegan} alt="Vega" className="Vegan-Mous"></img>

          <img src={millianiarie} alt="past" className="millianir"></img>

          <img src={pasta} alt="skill" className="pasta"></img>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default NewProductsMenu;

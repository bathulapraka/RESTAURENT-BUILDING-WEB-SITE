import React from "react";
import Menus from "../MENU/MenuImages/Drinking.avif";
import Idly from "../MENU/MenuImages/Idly.avif";
import Meat from "../MENU/MenuImages/MeatFood.avif";
import Chicken from "../MENU/MenuImages/Meet.avif";
import noodles from "../MENU/MenuImages/Noodles.avif";
import pizza from "../MENU/MenuImages/Pizza.avif";
import rice from "../MENU/MenuImages/Rice.avif";
import royyas from "../MENU/MenuImages/Royya.avif";
import "../MENU/Menu.css";
const Menu = (props) => {
  return (
    <div  id="menu-section">
      <h2>FOOD ITEMS</h2>
      <p className="text-Drinkng">
        <span>
          From simple home-cooked dinners at home to tasting new dishes{" "}
        </span>{" "}
        <br />
        <span style={{ marginLeft: "70px" }}>
          while traveling — food connects us all to eat.
        </span>
        <br />
        <span style={{ marginLeft: "40px" }}>
          {" "}
          This category examines the world of food photography
        </span>
        <br />
        shots of everything from summer picnics in the park to decadent deserts.
        <h1 style={{ marginTop: "30px" }}>PRICE :- $500.5</h1>
        <h1 style={{ marginLeft: "300px", marginTop: "-70px" }}>
          QUANTITY :- 4
        </h1>
        <button
          style={{
            marginLeft: "200px",
            marginTop: "60px",
            padding: "30px",
            width: "200px",
            borderRadius: "50px",
            background: "grey",
            fontSize: "20px",
          }}
        >
          Add to cart
        </button>
      </p>
      <div>
        <span>
          <img src={Menus} alt="Drinkings" className="Drinking"></img>
          <br />
          <p id="idly-description" style={{ color: "aqua", marginTop: "16px" }}>
            <span style={{marginLeft:"70px", marginTop:"100px"}}>
              {" "}
              Idly is a traditional South Indian dish made from fermented rice
              and black lentil batter. <br />
            </span>
            <span style={{marginLeft:"135px"}}>
              {" "}
              It is a popular breakfast item known for its soft and fluffy
              texture. <br />
            </span>
            <span style={{marginLeft:"70px"}}>
              {" "}
              Idlies are typically served steamed and are enjoyed with a variety
              of accompaniments <br />
            </span>{" "}
            <span style={{marginLeft:"150px"}}> such as sambar (a spicy lentil-based soup) and chutney</span>
            
          </p>

          <img src={Idly} alt="Idly" className="Idly"></img>
          <img
            src={Meat}
            alt="meat"
            style={{
              height: "500px",
              display: "flex",
              width: "50%",
              objectFit: "cover",
              background: "no-repeat",
            }}
          ></img>
          <p id="meat-description" className="meat-food">
            Indulge in the savory delight of our signature steak, a culinary
            masterpiece <br />
            that promises to tantalize your taste buds. Sourced from the finest{" "}
            <br />
            cuts of prime beef, our steak is expertly seasoned and grilled
            <br /> to perfection, ensuring a mouthwatering experience with every
            bite.
          </p>
          <img
            src={Chicken}
            alt="Chick"
            style={{
              height: "500px",
              display: "flex",
              width: "50%",
              objectFit: "cover",
              background: "no-repeat",
              marginLeft: "50%",
            }}
          ></img>
          <p
            id="chicken-description"
            style={{ color: "red", marginTop: "-250px" }}
          >
            Savor the succulent flavors of our exquisite chicken dish, <br /> a
            culinary marvelthat will leave you craving for more. Prepared with
            tender,juicy chicken <br /> marinated in a blend of aromatic spices
            and herbs, each bite bursts with <br /> mouthwatering goodness.
            Whether grilled to perfection, simmered in a rich curry sauce,
          </p>
          <img src={noodles} alt="nood" className="noodles"></img>
          <p id="noodles-description" className="Nood">
            Embark on a culinary adventure with our tantalizing noodle dish, a
            flavorful
            <br /> blend of tradition and innovation. Crafted with the finest
            noodles cooked
            <br /> to al dente perfection our dish features a symphony of fresh
            vegetables
            <br /> succulent meats and aromatic spices <br /> all stir-fried to
            create a harmonious balance of flavors and textures.
          </p>
          <img
            src={pizza}
            alt="Pizz"
            style={{
              height: "500px",
              display: "flex",
              width: "50%",
              objectFit: "cover",
              background: "no-repeat",
              marginLeft: "50%",
            }}
          ></img>
          <p
            id="pizza-description"
            style={{ color: "blue", marginTop: "-250px" }}
          >
            Experience the taste of Italy with our irresistible pizza, a
            culinary masterpiece that combines the finest <br />
            ingredients with artisanal craftsmanshipOur pizza starts with a thin
            <br /> crispy crust made from handcrafted dough, perfectly baked to
            golden perfection
            <br />
            Topped with a tantalizing array of fresh vegetables savory meats,
            and premium cheeses
            <br /> each slice is a symphony of flavors that will transport you
            to the streets of Naples.
          </p>
          <img src={rice} alt="rice" className="ric"></img>
        </span>
        <p id="rice-description" className="rice-food">
          Indulge in the aromatic flavors of our signature rice dish, a culinary
          delight that
          <br /> transports you to distant lands with every spoonful. Made with
          fragrant basmati rice
          <br /> cooked to fluffy perfection, our dish is infused with a
          symphony of spices and herbs
          <br /> creating a tantalizing blend of savory and aromatic notes
        </p>
        <img
          src={royyas}
          alt="roy"
          style={{
            height: "500px",
            display: "flex",
            width: "50%",
            objectFit: "cover",
            background: "no-repeat",
            marginLeft: "50%",
          }}
        ></img>
        <p
          id="royyalu-description"
          style={{ color: "blue", marginTop: "-250px" }}
        >
          Delight your taste buds with the exquisite flavors of our signature
          Royyalu dish, a culinary masterpiece
          <br /> that celebrates the bounty of the sea. Made with succulent
          shrimp or prawns
          <br /> marinated in a fragrant blend of spices and herbs, our Royyalu
          is a symphony of taste and texture
          <br /> Each bite offers a perfect balance of savory and spicy notes,
          as the tender seafood <br /> mingles with the rich, aromatic sauce.
        </p>
      </div>
    </div>
  );
};

export default Menu;

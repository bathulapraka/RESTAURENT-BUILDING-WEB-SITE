import CartSymbol from "../CartIcon/Cartsicon";
import {useContext} from "react";
import "../Layout/Header.css";
import CartContext from "../Store/CartContext";
const Headercart = (props) => {
  const {items} = useContext(CartContext);


  
  return (
    <button className="Cart-icon" onClick={props.onClick}>
      <span className="svg-cart">
        <CartSymbol />
      </span>
      <span className="name-cart">Your Cart</span>
     <span className="items">{items.length}</span>
    </button>
  );  
};

export default Headercart;

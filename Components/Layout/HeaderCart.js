import { useContext } from "react";

import CartSymbol from "../CartIcon/Cartsicon";
import CartContext from "../Store/CartContext";
import "../Layout/Header.css";

const Headercart = (props) => {
  const CartCtx = useContext(CartContext);

  const CartitemsStoreNumber = CartCtx.items.reduce((NumberCart,item) => {
  return NumberCart+item.amount;
  }, 0);
  return (
    <button className="Cart-icon" onClick={props.onClick}>
      <span className="svg-cart">
        <CartSymbol />
      </span>
      <span className="name-cart">Your Cart</span>
      <span className="items">{CartitemsStoreNumber}</span>
    </button>
  );
};

export default Headercart;

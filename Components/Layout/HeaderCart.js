import CartSymbol from "../CartIcon/Cartsicon";

import "../Layout/Header.css";

const Headercart = (props) => {
  return (
    <button className="Cart-icon" onClick={props.onClick}>
      <span className="svg-cart">
        <CartSymbol />
      </span>
      <span className="name-cart">Your Cart</span>
      <span className="items">1</span>
    </button>
  );
};

export default Headercart;

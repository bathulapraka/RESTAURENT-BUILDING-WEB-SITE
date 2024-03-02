import React from "react";
import CartContext from "../Store/CartContext";

const CartProvider = (props) => {
  const Additemprovider = (item) => {};

  const RemoveProvider = (id) => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    Additem: Additemprovider,
    RemoveItem: RemoveProvider,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;

import React, { useReducer } from "react";
import CartContext from "../Store/CartContext";

const defaultCartReducer = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "Add") {
    const updatedCartItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updatedCartItems,
      totalAmount: updatedTotalAmount,
    };
  }
  

  if (action.type === "Remove") {
    const updatedItems = state.items.filter(item => item.id !== action.id);
    return {
      ...state,
      items: updatedItems,
    };
  }
  return state;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartReducer);

  const addItemProvider = (item) => {
    dispatchCart({ type: "Add", item: item });
  };

  const removeProvider = (id) => {
    dispatchCart({ type: "Remove", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    Additem: addItemProvider,
    removeItem: removeProvider,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

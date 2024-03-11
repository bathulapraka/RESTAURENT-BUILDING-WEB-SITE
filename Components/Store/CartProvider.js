import React, { useReducer, useState } from "react";
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
    const indexToRemove = state.items.findIndex(
      (item) => item.id === action.id
    );

    if (indexToRemove !== 1) {
      const updatedItems = [
        ...state.items.slice(0, indexToRemove),
        ...state.items.slice(indexToRemove + 1),
      ];

      return {
        ...state,
        items: updatedItems,
      };
    }
  }

  return state;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartReducer);
  const [itemCount, setItemCount] = useState(0);
  const addItemProvider = (item) => {
    dispatchCart({ type: "Add", item: item });
    setItemCount((prevItemCount) => prevItemCount + item.amount);
  };

  const removeProvider = (id) => {
    dispatchCart({ type: "Remove", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    Additem: addItemProvider,
    removeItem: removeProvider,
    itemCount: itemCount,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

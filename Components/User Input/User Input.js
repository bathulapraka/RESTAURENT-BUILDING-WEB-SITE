import React, { useContext } from "react";
import CartContext from "../Store/CartContext";

const User = ({ name, amount, inputs }) => {
  const { Additem, items } = useContext(CartContext);

  const addItemToCart = () => {
    const item = { name, amount, inputs };
    Additem(item);
  };

  const submitHandler = () => {
    const isPresent = CheckCart();
    if (!isPresent) {
      addItemToCart();
    } else {
      alert("ITEM IS ALREADY IN THE CART PAGE");
    }
  };

  const CheckCart = () => {
    return items.some((item) => item.name === name);
  };

  return (
    <div className="All-adding-items">
      <span>
        <h2>Amount</h2>
      </span>
      <span>
        <input type="number"></input>
      </span>
      <span>
        <button onClick={submitHandler}>+ Add</button>
      </span>
    </div>
  );
};

export default User;

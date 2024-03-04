import React, { useContext } from "react";
import CartContext from "../Store/CartContext";

const User = ({ name, amount }) => {
  const { Additem} = useContext(CartContext);

  const addItemToCart = () => {
    const item = { name, amount };
    Additem(item);
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
        <button onClick={addItemToCart}>+ Add</button>
        
      </span>
    </div>
  );
};

export default User;

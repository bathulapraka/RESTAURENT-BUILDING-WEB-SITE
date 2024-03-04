import Modal from "../UI/Cart Modal";
import "../Layout/Header.css";
import { useContext } from "react";
import CartContext from "../Store/CartContext";

const CartItems = (props) => {
  const CartCtx = useContext(CartContext);

  const CartitemsStoreNumber = CartCtx.items.reduce((NumberCart, item) => {
    return NumberCart + item.amount;
  }, 0);

  const RemoveCartItems = (id) => {
    CartCtx.removeItem(id);
  };

  const arritems = (
    <ul>
      {CartCtx.items.map((item) => (
        <li key={item.id}>
          {item.name}
          <br />
          {item.amount}
          <button onClick={() => RemoveCartItems(item.id)}>-</button>
          <button>+</button>
        </li>
      ))}
    </ul>
  );
  return (
    <Modal Onclose={props.Onclose}>
      {arritems}

      <div className="All-backdrop">
        <h1 className="Total">Total Amount</h1>
        <h3 className="Amount">{CartitemsStoreNumber}</h3>
      </div>
      <div className="button-backdrop">
        <button className="button1" onClick={props.Onclose}>
          Close
        </button>
        <button className="button2">Order</button>
      </div>
    </Modal>
  );
};
export default CartItems;

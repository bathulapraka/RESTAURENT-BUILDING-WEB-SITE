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
    <ul className="All-Cart-Items">
      {CartCtx.items.map((item) => (
        <li
          key={item.id}
          style={{
            borderBottom: "1px solid black",
            marginBottom: "px",
            borderRight: "39px",
            marginLeft:"-30px",
            color:"green"
          
          }}
        >
          {item.name}
          <br />
          {item.amount}
          <div
            style={{ marginLeft: "70%", display: "flex", marginBottom: "40px", fontSize:"50px",marginTop:"-50px" }}
          >
            <button onClick={() => RemoveCartItems(item.id)} style={{padding:"7px",width:"50px"}}>-</button>
            <button style={{ marginLeft: "50px", paddingLeft: "10px",width:"50px" }}>
              +
            </button>
          </div>
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

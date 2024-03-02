import Modal from "../UI/Cart Modal";
import "../Layout/Header.css";

const CartItems = (props) => {
  const arritems = (
    <ul>
      {[
        {
          name: "Sushi",
          amount: 2,
          price: 20.02,
          id: "h1",
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal Onclose={props.Onclose}>
      {arritems}
      <div className="All-backdrop">
        <h1 className="Total">Total Amount</h1>
        <h3 className="Amount">30.76</h3>
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

import React from "react";
import "../Layout/Header.css";
const User = (props) => {
  return (
    <div className="All-adding-items">
      <span>
        <h2>Amount</h2>
      </span>
      <span>
        <form>
          <input type="text"></input>
        </form>
      </span>
      <span>
        <button>+ Add</button>
      </span>
    </div>
  );
};
export default User;

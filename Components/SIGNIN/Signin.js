import React from "react";
import Login from "../../SignInModal/ModalSign";

const Sign = (props) => {
  return (
    <Login  Onclose={props.Onclose} >
      <div style={{color:"green"}}>
        <input type="text" placeholder="ENTER YOUR NAME" />
        <input type="text" placeholder="ENTER YOUR PASSWORD" />
        <input type="checkbox" />
        <p>Forgot PASSWORD</p>
        <button type="submit">Submit</button> 
      </div>
    </Login>
  );
};

export default Sign;

import "./App.css";
import { useState } from "react";
import Header from "./Components/Layout/Header";
import CartItems from "./Components/Cart/Cart";
import CartProvider from "./Components/Store/CartProvider";

function App() {
  const [Click, Setclick] = useState(false);

  const shown = () => {
    Setclick(true);
  };
  const Notshow = () => {
    Setclick(false);
  };
  return (
    <CartProvider>  
      {Click && <CartItems Onclose={Notshow} />}
      <Header Showing={shown} />
    </CartProvider> 
  );
}

export default App;

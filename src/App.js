import React, {useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";



function App() {
 
  
  const [cartIsShown, setCartIsShown]= useState(false);


  const showCartHander =()=>{
    setCartIsShown(true)
  }

  const hideCartHandler=()=>{
    setCartIsShown(false)
  }
  


  return (
   <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler}  />}
     <Header onShowCart={showCartHander}/>
     <main>
       <Meals />
     </main>
     </CartProvider>
  );
}

export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Navbar from "./Components/Navbar";
import ShoppingCart from "./Components/ShoppingCart";
import ItemPage from "./Components/ItemPage";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const isItemInCart = cart.some(
      (itemInCart) => item.inCartId === itemInCart.inCartId
    );
    if (isItemInCart) {
      const updatedCart = cart.map((itemInCart) => {
        if (item.inCartId === itemInCart.inCartId) {
          itemInCart.quantity = itemInCart.quantity + item.quantity;
        }
        return itemInCart;
      });
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, item]);
    }
  };

  const removeItemFromCart = (itemId) => {
    // loop through cart and add every item which id
    // doesn't equal the item's id to a new array
    const updatedCart = cart.filter((itemInCart) => {
      return itemId !== itemInCart.inCartId;
    });
    setCart(updatedCart);
  };

  const changeQuantity = (itemId, value) => {
    if (value === 0) {
      removeItemFromCart(itemId);
    } else {
      const updatedCart = cart.map((itemInCart) => {
        if (itemId === itemInCart.inCartId) {
          itemInCart.quantity = value;
        }
        return itemInCart;
      });
      setCart(updatedCart);
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar itemsInCart={cart} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/cart">
            <ShoppingCart
              cart={cart}
              changeQuantity={changeQuantity}
              remove={removeItemFromCart}
            />
          </Route>
          <Route path="/item/:itemId">
            <ItemPage addToCart={addToCart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

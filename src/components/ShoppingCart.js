import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartItem from "./ShoppingCartItem";
import "./styles/ShoppingCart.css";

function ShoppingCart({ cart, remove, changeQuantity }) {
  const calculateTotal = () => {
    const total = cart.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
    return total;
  };

  const createCartContent = () => {
    // create shopping cart depending if it's empty or has items
    if (cart.length >= 1) {
      return (
        <>
          <div className="cart-content">
            <div className="cart-head">
              <span>Items</span>
              <span>Quantity</span>
              <span>Total</span>
            </div>
            <div className="cart-list">
              {cart.map((item) => (
                <ShoppingCartItem
                  key={item.inCartId}
                  item={item}
                  itemRemove={remove}
                  changeQuantity={changeQuantity}
                />
              ))}
            </div>
            <span className="cart-total">Total £{calculateTotal()}</span>
          </div>
          <button className="cart-checkout">Checkout</button>
        </>
      );
    } else {
      return (
        <div className="empty-cart">
          <h3>Your shopping cart is empty</h3>
          <Link to="/shop">Continue shopping</Link>
        </div>
      );
    }
  };

  const cartContent = createCartContent();

  return (
    <div>
      <div className="cart">
        <h1>Your shopping cart</h1>
        {cartContent}
      </div>
    </div>
  );
}

export default ShoppingCart;

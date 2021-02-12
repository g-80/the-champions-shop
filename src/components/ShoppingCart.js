import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartItem from "./ShoppingCartItem";

function ShoppingCart({ cart, remove, changeQuantity }) {
  const [checkoutDisplay, setCheckoutDisplay] = useState(null);
  const checkoutOnClick = () => {
    const display = (
      <div className="checkout-bg">
        <div className="checkout-display">
          <span className="checkout-span">Sike. You thought</span>
          <button
            className="button-1"
            onClick={() => {
              setCheckoutDisplay(null);
            }}
          >
            Back to cart
          </button>
        </div>
      </div>
    );
    setCheckoutDisplay(display);
  };

  const calculateTotal = () => {
    const total = cart.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
    return total;
  };

  // create shopping cart depending if it's empty or has items
  const createCartContent = () => {
    if (cart.length >= 1) {
      return (
        <div className="cart">
          <h1>Your shopping cart</h1>
          <h2 className="cart-items-num">{cart.length} items</h2>
          <div className="cart-list">
            {cart.map((item, index) => (
              <ShoppingCartItem
                item={item}
                index={index}
                itemRemove={remove}
                changeQuantity={changeQuantity}
              />
            ))}
          </div>
          <div className="cart-total">Total £{calculateTotal()}</div>
          <button onClick={checkoutOnClick} className="cart-checkout button-1">
            Checkout
          </button>
        </div>
      );
    } else {
      return (
        <div className="cart">
          <h1>Your shopping cart</h1>
          <h2>Your shopping cart is empty</h2>
          <Link to="/shop">Continue shopping</Link>
        </div>
      );
    }
  };
  const cartContent = createCartContent();

  return (
    <div>
      {checkoutDisplay}
      {cartContent}
    </div>
  );
}

export default ShoppingCart;

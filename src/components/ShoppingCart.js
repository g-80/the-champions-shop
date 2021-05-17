import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartItem from "./ShoppingCartItem";

function ShoppingCart({ cart, remove, changeQuantity }) {
  const calculateTotal = () => {
    const total = cart.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
    return total;
  };

  const createCartContent = () => {
    // create shopping cart depending if it's empty or has items
    console.log(cart);
    if (cart.length >= 1) {
      return (
        <div className="cart">
          <h1>Your shopping cart</h1>
          <h2 className="cart-items-num">{cart.length} items</h2>
          <div className="cart-list">
            {cart.map((item, index) => (
              <ShoppingCartItem
                key={item.id}
                item={item}
                index={index}
                itemRemove={remove}
                changeQuantity={changeQuantity}
              />
            ))}
          </div>
          <div className="cart-total">Total £{calculateTotal()}</div>
          <button className="cart-checkout button-1">Checkout</button>
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

  return <div>{cartContent}</div>;
}

export default ShoppingCart;

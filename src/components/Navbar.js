import React from "react";
import { Link } from "react-router-dom";

function Navbar({ itemsInCart }) {
  const calculateItemsNumber = () => {
    const total = itemsInCart.reduce((sum, item) => {
      return sum + item.quantity;
    }, 0);
    return total;
  };
  return (
    <nav className="navbar">
      <Link to="/">
        <h1 className="nav-brand-name">The Champions</h1>
      </Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">
        <div className="nav-cart-icon">
          <svg width="24px" height="24px">
            <path d="M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z"></path>
            <path d="M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z"></path>
          </svg>
          <span id="items-number">{calculateItemsNumber()}</span>
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;

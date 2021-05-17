import React, { useState } from "react";

function ShoppingCartItem({ item, itemRemove, changeQuantity }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleQuantityChange = (value) => {
    changeQuantity(item.inCartId, value);
    setIsDropdownOpen(false);
  };

  const createListElements = () => {
    let listElements = [];
    for (let i = 0; i < 6; i++) {
      const listElement = (
        <li className="q-list" key={i}>
          <button
            className="q-list-btn"
            value={i}
            onClick={() => handleQuantityChange(i)}
          >
            {i}
          </button>
        </li>
      );
      listElements.push(listElement);
    }
    return <ul className="q-dropdown">{listElements}</ul>;
  };

  return (
    <div className="cart-item">
      <img src={item.img} alt={item.name} className="cart-item-image"></img>
      <h3 className="cart-item-name">{item.name}</h3>
      <span>{item.size}</span>
      <div className="cart-item-quantity">
        <span className="cart-item-q-label">Quantity</span>
        <div className="q-cont">
          <button
            className="q-btn"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            <span className="item-q">{item.quantity}</span>
            <svg className="q-arrow">
              <path
                fill="none"
                stroke="#2c2f35"
                strokeWidth="2"
                d="M1.5 9L8 15.5 14.5 9"
              ></path>
            </svg>
          </button>
        </div>
        {isDropdownOpen && createListElements()}
      </div>
      <span className="cart-item-price">£{item.price * item.quantity}</span>
      <button
        onClick={() => {
          itemRemove(item.inCartId);
        }}
        className="cart-item-delete"
      >
        Delete
      </button>
    </div>
  );
}

export default ShoppingCartItem;

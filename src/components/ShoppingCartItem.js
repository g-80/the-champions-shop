import React, { useState } from "react";

function ShoppingCartItem({ item, itemRemove, changeQuantity }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleQuantityChange = (value) => {
    changeQuantity(item.id, value);
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
    <div className="cart-item" key={item.id}>
      <img src={item.img} alt={item.name} className="cart-item-image"></img>
      <div className="cart-item-name">{item.name}</div>
      <div className="cart-item-quantity">
        <label className="cart-item-q-label">Quantity</label>
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
      <div className="cart-item-price">£{item.price * item.quantity}</div>
      <button
        onClick={() => {
          itemRemove(item.id);
        }}
        className="cart-item-delete"
      >
        Delete
      </button>
    </div>
  );
}

export default ShoppingCartItem;

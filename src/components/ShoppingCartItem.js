import React from "react";

function ShoppingCartItem({ item, index, itemRemove, changeQuantity }) {
  const toggleQuantityDropdown = (index) => {
    // show/hide list elements which are used to display quantity options
    const allListElements = document.querySelectorAll(".q-dropdown");
    const dropdown = allListElements[index];
    dropdown.classList.toggle("dropdown-open");
  };

  const handleQuantityChange = (value, index) => {
    // get the item's hidden select element and dispatch an event to it
    // to allow react to change the state and re-render DOM

    const allSelectElements = document.querySelectorAll(".q-select");
    const selectElement = allSelectElements[index];
    selectElement.value = value;
    const event = new Event("change", { bubbles: true });
    selectElement.dispatchEvent(event);
    toggleQuantityDropdown(index);
  };

  const createListElement = () => {
    // List elements are what visible for user. They're used for styling
    let listElements = [];
    for (let i = 0; i < 6; i++) {
      const listElement = (
        <li className="q-list">
          <button
            className="q-list-btn"
            value={i}
            onClick={() => handleQuantityChange(i, index)}
          >
            {i}
          </button>
        </li>
      );
      listElements.push(listElement);
    }
    return <ul className="q-dropdown">{listElements}</ul>;
  };

  const createSelectElement = () => {
    // Select element is used for functionality of changing quantity. It's not visible for user
    let optionElements = [];
    for (let i = 0; i < 6; i++) {
      const optionElement = (
        <option className="q-option" value={i}>
          {i}
        </option>
      );
      optionElements.push(optionElement);
    }
    return (
      <select
        className="q-select"
        onChange={(e) => {
          // changing quantity happens at App component's state
          changeQuantity(item.id, e.target.value);
        }}
      >
        {optionElements}
      </select>
    );
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
            onClick={() => toggleQuantityDropdown(index)}
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
        {createListElement()}
        {createSelectElement()}
      </div>
      <div className="cart-item-price">£{item.price}</div>
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

// Getting the quantity dropdown to work took me over 4 hours

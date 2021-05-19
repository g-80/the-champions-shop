import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import shirtsData from "../shirtsData";
import "./styles/ItemPage.css";

function ItemPage({ addToCart }) {
  const [selectedSize, setSelectedSize] = useState();
  const [sizeError, setSizeError] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const sizesRef = useRef(null);
  const handleSizeClick = (targetElement, size) => {
    setSelectedSize(size);
    setSizeError(false);
    const childrenArray = Array.from(sizesRef.current.children);
    childrenArray.forEach((child) => child.classList.remove("selected-size"));
    targetElement.classList.add("selected-size");
  };

  const { itemId } = useParams();
  const item = shirtsData.find((shirt) => {
    return shirt.id === itemId;
  });

  const sizeOptions = () => {
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
    return (
      <div className="item-page-size-options">
        <h3>Choose a size</h3>
        <div className="item-page-sizes" ref={sizesRef}>
          {sizes.map((size, index) => (
            <button
              className="item-page-size"
              key={index}
              onClick={(e) => {
                handleSizeClick(e.target, size);
              }}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const addItemToCart = () => {
    if (selectedSize && quantity > 0 && quantity <= 5) {
      const itemCartObject = {
        ...item,
        size: selectedSize,
        quantity,
        inCartId: `${item.id}-${selectedSize}`,
      };
      addToCart(itemCartObject);
    } else if (!selectedSize) {
      setSizeError(true);
    }
  };

  return (
    <div className="item-page">
      <div className="item-page-info">
        <h1 className="item-page-name">{item.name}</h1>
        <h2 className="item-page-price">£{item.price}</h2>
        {sizeOptions()}
        <div className="item-page-quantity-container">
          <h3>Quantity</h3>
          <div className="item-page-quantity-inputs">
            <input
              className="item-page-quantity"
              type="number"
              value={quantity}
              min="1"
              max="5"
              maxLength="1"
              id="item-quantity"
              onChange={(e) => setQuantity(+e.target.value)}
            ></input>
            <div className="quantity-controls">
              <button
                className="quantity-control plus"
                onClick={() => {
                  if (quantity < 5) setQuantity((prev) => prev + 1);
                }}
              >
                <span>+</span>
              </button>
              <button
                className="quantity-control minus"
                onClick={() => {
                  if (quantity > 1) setQuantity((prev) => prev - 1);
                }}
              >
                <span>-</span>
              </button>
            </div>
          </div>
          {(quantity > 5 || quantity === 0) && (
            <p className="quantity-error">
              Please choose item quantity between 1 - 5
            </p>
          )}
        </div>
        {sizeError && <p className="size-error">Please select your size</p>}
        <button onClick={addItemToCart} className="item-page-add">
          Add to cart
        </button>
      </div>
      <div className="item-page-image-container">
        <img
          src={item.img}
          alt={`${item.name}`}
          className="item-page-image"
        ></img>
      </div>
    </div>
  );
}

export default ItemPage;

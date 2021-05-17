import React, { useState } from "react";
import { useParams } from "react-router-dom";
import shirtsData from "../shirtsData";

function ItemPage({ addToCart }) {
  const [selectedSize, setSelectedSize] = useState();
  const [sizeError, setSizeError] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const { itemId } = useParams();
  const item = shirtsData.find((shirt) => {
    return shirt.id === itemId;
  });

  const sizeOptions = () => {
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
    return (
      <div>
        <h3>Choose a size</h3>
        <div>
          {sizes.map((size, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedSize(size);
                setSizeError(false);
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
        <div>
          <h3>Quantity</h3>
          <input
            type="number"
            value={quantity}
            min="1"
            max="5"
            id="item-quantity"
            onChange={(e) => setQuantity(+e.target.value)}
          ></input>
          {(quantity > 5 || quantity === 0) && (
            <p>Please choose item quantity between 1 - 5</p>
          )}
        </div>
        {sizeError && <p>Please select your size</p>}
        <button onClick={addItemToCart} className="item-page-add button-1">
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

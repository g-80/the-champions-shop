import React from "react";
import { useParams } from "react-router-dom";
import shirtsData from "../shirtsData";

function ItemPage({ addToCart }) {
  const { itemId } = useParams();
  const item = shirtsData.find((shirt) => {
    return shirt.id === itemId;
  });

  return (
    <div className="item-page">
      <div className="item-page-info">
        <h1 className="item-page-name">{item.name}</h1>
        <h2 className="item-page-price">£{item.price}</h2>
        <button
          onClick={() => addToCart(item)}
          className="item-page-add button-1"
        >
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

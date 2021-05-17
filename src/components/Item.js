import React from "react";
import { Link } from "react-router-dom";

function Item({ id, image, name, price }) {
  return (
    <li>
      <Link to={`/item/${id}`} className="shop-item">
        <img src={image} alt={name} className="shop-item-image"></img>
        <span className="shop-item-name">{name}</span>
        <span className="shop-item-price">{`£${price}`}</span>
      </Link>
    </li>
  );
}

export default Item;

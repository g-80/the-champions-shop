import React from "react";
import { Link } from "react-router-dom";
function Item(props) {
  return (
    <li>
      <Link to={`/item/${props.id}`} className="shop-item">
        <img
          src={props.image}
          alt={props.name}
          className="shop-item-image"
        ></img>
        <span className="shop-item-name">{props.name}</span>
        <span className="shop-item-price">{props.price}</span>
      </Link>
    </li>
  );
}

export default Item;

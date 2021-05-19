import React from "react";
import Item from "./Item";
import shirtsData from "../shirtsData";
import "./styles/Shop.css";

function Shop() {
  return (
    <div>
      <div className="shop-heading">
        <h2>Clubs shirts</h2>
        <span>{shirtsData.length} items</span>
      </div>
      <ul className="shop-items">
        {shirtsData.map((item) => {
          return (
            <Item
              name={item.name}
              image={item.img}
              price={item.price}
              key={item.id}
              id={item.id}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Shop;

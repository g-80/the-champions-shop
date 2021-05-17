import React from "react";
import Item from "./Item";
import shirtsData from "../shirtsData";

function Shop() {
  return (
    <div>
      <header className="shop-header">
        <h1>Clubs shirts</h1>
        <h2>{shirtsData.length} items</h2>
      </header>
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

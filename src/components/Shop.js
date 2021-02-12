import React from "react";
import Item from "./Item";
import shirts from "../data/shirts";

function Shop(props) {
  return (
    <div>
      <header className="shop-header">
        <h1>Clubs shirts</h1>
        <h2>{shirts.length} items</h2>
      </header>
      <ul className="shop-items">
        {shirts.map((item) => {
          return (
            <Item
              name={item.name}
              image={item.img}
              price={`£${item.price}`}
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

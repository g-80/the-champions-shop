import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="home">
      <div className="home-text-container">
        <h1 className="home-title">The Champions football shirts</h1>
        <p className="home-desc">Browse our football shirts shop</p>
        <Link to="/shop">Shop now</Link>
      </div>
    </div>
  );
}

export default Home;

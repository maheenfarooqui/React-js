import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="index.html" className="navbar-logo">
          HOBNOB
        </a>

        <div className="navbar-links">
          <a href="#">Bento Cakes</a>
          <a href="#">Sandwiches & Wraps</a>
          <a href="#">Cakes</a>
          <a href="#">Gifting</a>
        </div>

        <a href="#" className="cart-icon" aria-label="Shopping Cart">
          🛒
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

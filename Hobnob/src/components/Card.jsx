import React from "react";
import dfudge from "../assets/dfudge.webp";
const Card = () => {
  return (
    <>
      <div className="product-card">
        <div className="product-image-box">
          <img src={dfudge} alt="Double Fudge Brownie" />

          <button className="add-btn">+</button>
        </div>

        <div className="product-info">
          <h3>Double Fudge Brownie</h3>

          <div className="product-price">
            <span className="old-price">Rs. 250</span>
            <span className="new-price">Rs. 200</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

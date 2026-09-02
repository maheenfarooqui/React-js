import React from "react";
import bentocake from "../assets/bentocake.webp";

const ProductCard = (props) => {
  return (
    <>
      <div className="listing-card">
        <div className="listing-image">
          <img src={props.img} alt="BBQ Tikka Pizza" />
        </div>

        <div className="listing-content">
          <h3>{props.name}</h3>

          <p>{props.dec}</p>

          <div className="listing-price">
            <span className="listing-old-price">{props.oldPrice}</span>
            <span className="listing-new-price">{props.newPrice}</span>
          </div>

          <button className="add-cart-btn">ADD TO CART</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

import React from "react";

const Card =(props)=> {

  return (
    <>
      <div className="product-card">
        <div className="product-image-box">
          <img src={props.img} alt="Double Fudge Brownie" />

          <button className="add-btn">+</button>
        </div>

        <div className="product-info">
          <h3>{props.name}</h3>

          <div className="product-price">
            <span className="old-price">{props.oldPrice}</span>
            <span className="new-price">{props.newPrice}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

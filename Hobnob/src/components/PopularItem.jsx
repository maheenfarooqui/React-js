import React from "react";
import Card from "./Card";
import dfudge from "../assets/dfudge.webp";
import p1 from "../assets/p1.webp";
import p2 from "../assets/p2.webp";
import s1 from "../assets/s1.webp";

const PopularItem = () => {
  const productsDetaial = [
    {
      img: dfudge,
      name: "Double Fudge Brownie",
      oldPrice: "Rs. 250",
      newPrice: "Rs. 200",
    },
    {
      img: p1,
      name: "Nutella Brownie",
      oldPrice: "Rs. 250",
      newPrice: "Rs. 200",
    },
    {
      img: p2,
      name: "BBQ Tikka Pizza",
      oldPrice: "Rs. 300",
      newPrice: "Rs. 240",
    },
    {
      img: s1,
      name: "Fried Chicken Burger",
      oldPrice: "Rs. 450",
      newPrice: "Rs. 360",
    },
  ];
  return (
    <>
      <section className="popular-section">
        <div className="popular-header">
          <h2>
            <span className="popular-fire">🔥</span>
            Popular Items
          </h2>

          <p>Most ordered right now</p>
        </div>
        <div className="popular-products">
          {productsDetaial.map((item, index) => {
            return (
              <Card
                key={index}
                img={item.img}
                name={item.name}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
              />
            );
          })}
          {/* <Card name="Double Fudge Brownie" img={dfudge} oldPrice="Rs. 250" newPrice="Rs. 200" />
<Card name="Double Fudge Brownie" img={p1} oldPrice="Rs. 250" newPrice="Rs. 200" />
<Card name="Double Fudge Brownie" img={p2} oldPrice="Rs. 250" newPrice="Rs. 200" />
<Card name="Double Fudge Brownie" img={s1} oldPrice="Rs. 250" newPrice="Rs. 200" /> */}
        </div>
      </section>
    </>
  );
};

export default PopularItem;

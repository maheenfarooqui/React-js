import React from "react";
import ProductCard from "./ProductCard";
import bento from "../assets/bento.webp";
import cake from "../assets/cake.webp";
import gift from "../assets/gift.webp";
import sandwich from "../assets/sandwich.webp";
import gift1 from "../assets/gift1.webp";
import gift2 from "../assets/gift2.webp";
import gift3 from "../assets/gift3.webp";
import cake1 from "../assets/cake1.webp";
import cake2 from "../assets/cake2.webp";
import cake3 from "../assets/cake3.webp";
import cake4 from "../assets/cake4.webp";
import cake5 from "../assets/cake5.webp";
import cake6 from "../assets/cake6.webp";
import bentocake from "../assets/bentocake.webp";
import b1 from "../assets/b1.webp";
import b2 from "../assets/b2.webp";
import b3 from "../assets/b3.webp";
import s1 from "../assets/s1.webp";
import s2 from "../assets/s2.webp";
import s3 from "../assets/s3.webp";
import s4 from "../assets/s4.webp";
import Banner from "./Banner";

const DisplayBanner = () => {
  const bannerImg = [bento, cake, sandwich, gift];

  const bentocakeItem = [
    {
      img: bentocake,
      name: "Red Velvet Bento Cake",
      oldPrice: "Rs. 990",
      newPrice: "Rs. 792",
      dec: "A perfect little indulgence! Our Red Velvet Bento Cake features soft.",
    },
    {
      img: b1,
      name: "Lotus Bento Cake",
      oldPrice: "Rs. 990",
      newPrice: "Rs. 792",
      dec:"Layers of light and fluffy vanilla sponge, topped with creamy cream."
    },
    {
      img: b2,
      name: "Double Fudge Bento Cake",
      oldPrice: "Rs. 990",
      newPrice: "Rs. 792",
      dec:"A bestseller you don’t want to miss! Our classic Double Fudge Cake."
    },
    {
      img: b3,
      name: "Malt Bento Cake",
      oldPrice: "Rs. 990",
      newPrice: "Rs. 792",
      dec:"This 0.8 lb bento cake is crafted with soft moist sponge layers."
    },
  ];
  const cakeItem = [
    {
      img: cake1,
      name: "Rich Chocolate Cake",
      oldPrice: "Rs. 2100",
      newPrice: "Rs. 1680",
      dec: "Our Rich Chocolate Cake consists of a dense chocolate sponge.",
    },
    {
      img: cake2,
      name: "Black Forest Cake",
      oldPrice: "Rs. 2100",
      newPrice: "Rs. 1680",
      dec: "The original German classic! Our Black Forest Cake stays true.",
    },
    {
      img: cake3,
      name: "Premium Ferrero Rocher Cake",
      oldPrice: "Rs. 3600",
      newPrice: "Rs. 2560",
      dec: "The hazelnut experience! Our Ferrero Rocher Cake has a base.",
    },
    {
      img: cake4,
      name: "New York Cheesecake",
      oldPrice: "Rs. 3800",
      newPrice: "Rs. 3040",
      dec: "New York Cheesecake is a classic American classic! Our New.",
    },
 
  ];
  const sandwichItem =[
    {
      img: s1,
      name: "Chili Lime Chicken Sandwich",
      oldPrice: "Rs. 550",
      newPrice: "Rs. 440",
      dec: "Perfect combination of zesty chili, fresh lime, and soft.",
    },
    {
      img: s2,
      name: "Chicken Tikka Sandwich",
      oldPrice: "Rs. 550",
      newPrice: "Rs. 440",
      dec: "Perfect combination of zesty chili, fresh lime, and soft.",
    },
    {
      img: s3,
      name: "Chicken Satay Wrap",
      oldPrice: "Rs. 380",
      newPrice: "Rs. 304",
      dec:"This mouthwatering wrap features tender grilled chicken.",
    },
    {
      img: s4,
      name: "Chicken Shawarma Wrap",
      oldPrice: "Rs. 380",
      newPrice: "Rs. 304",
      dec: "A flavorful, calorie-conscious shawarma wrap packed with.",
    }
  ]
  const giftingItem=[
    {
      img:gift3,
      name:"Chocolate Bites Gift Box",
      oldPrice:"Rs. 2000",
      newPrice:"Rs. 1620",
      dec:"A delightful gift box filled with creamy chocolate."
    },
    {
      img:gift2,
      name:"Mix Biscuits Gift Box",
      oldPrice:"Rs. 2000",
      newPrice:"Rs. 1620",
      dec:"Box filled with creamy chocolate bites, perfect for."
    },
    {
      img:gift1,
      name:"Cupcakes Gift Box",
      oldPrice:"Rs. 2000",
      newPrice:"Rs. 1980",
      dec:"Box filled with cupcakes, perfect for any occasion."
    }
  ]

  return (
    <>
      <Banner img={bannerImg[0]} />
      <section className="product-section">
        <div className="product-grid">
          {bentocakeItem.map((item, index) => {
            return (
              <ProductCard
                key={index}
                img={item.img}
                name={item.name}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
                dec={item.dec}
              />
            );
          })}

        </div>
        <Banner img={bannerImg[1]} />
           <div className="product-grid">
          {cakeItem.map((item, index) => {
            return (
              <ProductCard
                key={index}
                img={item.img}
                name={item.name}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
                dec={item.dec}
              />
            );
          })}
        </div>
        <Banner img={bannerImg[2]} />
         <div className="product-grid">
          {sandwichItem.map((item, index) => {
            return (
              <ProductCard
                key={index}
                img={item.img}
                name={item.name}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
                dec={item.dec}
              />
            );
          })}
        </div>
        <Banner img={bannerImg[3]} />
         <div className="product-grid">
          {giftingItem.map((item, index) => {
            return (
              <ProductCard
                key={index}
                img={item.img}
                name={item.name}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
                dec={item.dec}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default DisplayBanner;

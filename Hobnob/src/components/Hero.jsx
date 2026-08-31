import React from "react";
import hero from "../assets/hero.webp";

const Hero = () => {
  return (
    <>
      <section className="hero">
        
        <img
          src={hero}
          alt="Hobnob Bakery"
         className="hero-image"
        />
      </section>
      <section className="search-section">
        
        <div className="search-container">
          
          <input
            type="text"
            id="searchInput"
            placeholder="Search for products..."
          />
          <button type="button"className="search-btn">
            
            🔍
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;

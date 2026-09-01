import React from "react";
import hero from "../assets/hero.webp";

const Hero = () => {
  return (
    <>
  <section className="hero-section">
    <div className="hero-container">
        <img src={hero} alt="Sweet & Savory" className="hero-image" />
    </div>
</section>
    </>
  );
};

export default Hero;

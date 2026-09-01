import React from 'react'
import ProductCard from './ProductCard'
import bento from '../assets/bento.webp'

const DisplayBanner = () => {
  return (
    <>
    


<section className="category-banner">
    <img
        src={bento}
        alt="Focaccia Pizzas"
    />
</section>


<section className="product-section">

    <div className="product-grid">

        
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      



        

    </div>

</section>
    
    
    </>
  )
}

export default DisplayBanner
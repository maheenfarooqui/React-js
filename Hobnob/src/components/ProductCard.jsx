import React from 'react'
import bentocake from '../assets/bentocake.webp'

const ProductCard = () => {
  return (
    <>
    
    <div className="listing-card">

            <div className="listing-image">
                <img src={bentocake} alt="BBQ Tikka Pizza" />
            </div>

            <div className="listing-content">

                <h3>BBQ Tikka Pizza</h3>

                <p>
                    A bold fusion of flavors featuring juicy BBQ tikka
                    chicken on a fluffy focaccia base, topped with...
                </p>

                <div className="listing-price">
                    <span className="listing-old-price">Rs. 300</span>
                    <span className="listing-new-price">Rs. 240</span>
                </div>

                <button className="add-cart-btn">
                    ADD TO CART
                </button>

            </div>

        </div>
    
    </>
  )
}

export default ProductCard
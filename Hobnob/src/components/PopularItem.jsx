import React from 'react'
import Card from './Card'

const PopularItem = () => {
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
<Card/>
<Card/>
<Card/>
<Card/>
</div>
</section>
    
    </>
  )
}

export default PopularItem
import React from 'react'

const Card = () => {
  return (
   <div className="card">
    <div className="card-badge">Featured</div>
    <div className="card-content">
      <h3 className="card-title">Next-Gen Interface</h3>
      <p className="card-description">
        Experience smooth animations and dynamic layouts built with raw CSS performance in mind.
      </p>
      <div className="card-footer">
        <span className="tag">#WebDev</span>
        <button className="card-btn">Explore</button>
      </div>
    </div>
  </div>
  )
}

export default Card
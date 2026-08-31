import React from 'react'

const Carousal = () => {
  return (
<div className='container'>
    <div id="carouselExampleDark" className="carousel carousel-dark slide mt-5" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlESQBk-4vtg06TDz4YdWo1wKD-8BJKuxFGJLwEv-2jw&s=10" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBB4LQTn0vRq4ydPLp-uTj_lEUHOHYWUU18JlCq5KuMw&s=10" className="d-block w-100" alt="..."/> 
      <div className="carousel-caption d-none d-md-block"> 
        <h5>Third slide label</h5> 
        <p>Some representative placeholder content for the third slide.</p> 
      </div> 
    </div> 
  </div> 
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev"> 
    <span className="carousel-control-prev-icon" aria-hidden="true"></span> 
    <span className="visually-hidden">Previous</span> 
  </button> 
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next"> 
    <span className="carousel-control-next-icon" aria-hidden="true"></span> 
    <span className="visually-hidden">Next</span> 
  </button> 
</div> 
</div>
  )
}

export default Carousal
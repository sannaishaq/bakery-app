import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Reviews() {
  return (
    <>
      <div className="customer">Our Lovely Clients</div>
      <div id="carouselHero" >
      <Carousel variant="light" fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/djbbs3mk3/image/upload/v1653498359/Cakes/IMG_8024_wyjpjp.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Custom Wedding Cake</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/djbbs3mk3/image/upload/v1653498388/Cakes/IMG_8025_qbzaaw.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Custom Theme Wedding Cake</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/djbbs3mk3/image/upload/v1653498307/Cakes/IMG_9788_mcrotp.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Custom Wedding Cake</h5>
          </Carousel.Caption>
        </Carousel.Item>
  </Carousel>
</div>

   
    </>
  )
}

export default Reviews
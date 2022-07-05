import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class TreatBox extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      lazyLoad: 'ondemand',
    };

    const slidesData = [
      {
        id: 1,
        title: 'Bridal Shower Treat Box',
        image: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1653580396/Cakes/IMG_2593_vq4i1w_lwmrdp.jpg'
      }, {
        id: 2,
        title: 'Valentine Treat Box',
        image: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1651762927/Cakes/IMG-4137_odqgh7.jpg'
      }, {
        id: 3,
        title: 'Valentine Treat Box',
        image: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1651763023/Cakes/IMG-0451_waiyyn.jpg'
      }
    ];
return (
  <>  
    <div className="cupcakecarousel" >
        <div className="cupcake-slider-wrapper">
            <Slider {...settings}>
                {slidesData.map((slide) =>

                  <div className="cupcake-slick-slide" key={slide.id}>
                    <a className='atag' href='https://docs.google.com/forms/d/e/1FAIpQLSeWMITLzJAg02faSFUYVR1oqn1ZoI77qEFO03l3z2johANTkQ/viewform'>
                    <h2 className="cupcake-slick-slide-title">{slide.title}</h2>
                    </a>
                    <img className="cupcake-slick-slide-image" src={slide.image} alt={slide.title}/>
                  </div>
                )}
          </Slider>
        </div>
    </div>
  </>
)
}
}
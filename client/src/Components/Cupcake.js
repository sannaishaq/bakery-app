import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Cupcake extends Component {
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
        title: 'Theme Cupcakes',
        image: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1653503816/Cakes/IMG_6259_a8ppxn.jpg'
      }, 
       {
        id: 2,
        title: 'Holiday Cupcakes',
        image: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1654030449/Cakes/IMG_7806_i0n3u0.jpg'
      },{
        id: 3,
        title: 'Holiday Cupcakes',
        image: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1651763069/Cakes/IMG-5065_azjbyr.jpg'
      },{
        id: 4,
        title: 'Baby Shower Cupcakes',
        image: 'https://i.pinimg.com/550x/39/d5/c7/39d5c7eab20d3ab21feb0f33b8a3357c.jpg'
      }, 
    ];
return (
  <>
    
    <div className="cupcakecarousel" >
    <div className="cupcake-slider-wrapper">

    <Slider {...settings}>

        {slidesData.map((slide) =>

          <div className="cupcake-slick-slide" key={slide.id}>
            <a className='atag' href='https://docs.google.com/forms/d/e/1FAIpQLSf62ileZeSOpviqtsHzDNQjgDZVpjQS3BO4RTX703m81IKRng/viewform'>
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


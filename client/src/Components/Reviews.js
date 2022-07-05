import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Reviews extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        lazyLoad: 'ondemand',
      };

      const slidesData = [
        {
          id: 1,
          title: 'Custom Birthday Cake',
          image: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1653498359/Cakes/IMG_8024_wyjpjp.jpg'
        }, {
          id: 2,
          title: 'Custom Themed Birthday Cake',
          image: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1653498388/Cakes/IMG_8025_qbzaaw.jpg'
        }, {
          id: 3,
          title: 'Custom Birthday Cake',
          image: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1653498307/Cakes/IMG_9788_mcrotp.jpg'
        }
        , {
          id: 4,
          title: 'Custom Birthday Cake',
          image: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1654028756/Cakes/IMG_0059_z2cpq0.jpg'
        }
        , {
          id: 5,
          title: 'Custom Birthday Cake',
          image: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1654030564/Cakes/f6d99c92-425a-4d5e-9143-20e1d6778a70_er2ohh.jpg'
        }
      ];
  return (
    <>
      
      <div className="customer">Our Lovely Clients
        <div className="clients-slider-wrapper">

            <Slider {...settings}>

                {slidesData.map((slide) =>

                  <div className="clients-slick-slide" key={slide.id}>
                    <img className="clients-slick-slide-image" src={slide.image} alt={slide.title}/>
                </div>
                )}

          </Slider>

        </div>
      </div>
    </>
  )
}
}


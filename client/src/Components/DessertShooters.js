import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class DessertShooters extends Component {
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
        title: 'Blueberry Flavored Shooters',
        image: 'https://i.pinimg.com/736x/dc/c3/ba/dcc3baa7425509168e47e1dbde1e5714--wedding-dessert-tables-desert-bars-party-dessert-tables.jpg'
      }, {
        id: 2,
        title: 'Assorted Dessert Shooters',
        image: 'https://i.pinimg.com/736x/e1/a2/71/e1a271d233e228bfb7badbbc26310cdb.jpg'
      }, {
        id: 3,
        title: 'Oreo Flavored Dessert Shooters',
        image: 'https://i.pinimg.com/736x/7f/96/27/7f9627f25a616bfef672b37d14139085--cheesecake-shooters-mini-oreo-cheesecake.jpg'
      }, {
        id: 4,
        title: 'Caramel Flavored Dessert Shooters',
        image: 'https://i.pinimg.com/564x/e4/f1/70/e4f17073d68a7c60b718ec92e1d4c7ed.jpg'
      }, 
    ];
return (
  <>
    
    <div className="cupcakecarousel" >
        <div className="cupcake-slider-wrapper">
          <Slider {...settings}>

              {slidesData.map((slide) =>

                <div className="cupcake-slick-slide" key={slide.id}>
                  <a className='atag' href='https://docs.google.com/forms/d/e/1FAIpQLScw-HyUuB5axu7_7-DQd44bk6mj3P8pLBMk3ihxdvGjISRmTA/viewform'>
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
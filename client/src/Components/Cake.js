import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Cake extends Component {
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
          title: 'Custom Birthday Cake',
          image: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1653503821/Cakes/IMG_7853_oct9sx.jpg'
        }, {
          id: 2,
          title: 'Custom Themed Birthday Cake',
          image: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1653502430/Cakes/IMG_6251_ywyksc.jpg'
        }, {
          id: 3,
          title: 'Custom Birthday Cake',
          image: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1653502453/Cakes/IMG_5897_pmuuac.jpg'
        }, {
          id: 4,
          title: 'Custom Birthday Cake',
          image: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1653578573/Cakes/IMG_6327_zww3zh.jpg'
        }, {
          id: 5,
          title: 'Custom Graduation Cake',
          image: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1653502456/Cakes/IMG_6114_fnkv2z.jpg'
        }, {
          id: 6,
          title: 'Custom Birthday Cake',
          image: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1653497631/Cakes/IMG_8026_xrwueg.jpg'
        },{
          id: 7,
          title: 'Custom Wedding Cake',
          image: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1653578319/Cakes/IMG_9773_isqh8x.jpg'
        },{
          id: 8,
          title: 'Custom Birthday Cake',
          image: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1652195578/Cakes/IMG-3133_aoagx5.jpg'
        },{
          id: 9,
          title: 'Custom Graduation Cake',
          image: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1653578787/Cakes/IMG_6140_ybu4ii.jpg'
        },
      ];
  return (
    <>
      
      <div className="cakecarousel" >
      <div className="slider-wrapper">

      <Slider {...settings}>

          {slidesData.map((slide) =>

            <div className="slick-slide" key={slide.id}>
              <a className='atag' href='https://docs.google.com/forms/d/e/1FAIpQLScQ_cvOw25wygFYex28s_VXoTYfiB2zelPr21qFuNxP55tebw/viewform'>
              <h2 className="slick-slide-title">{slide.title}</h2>
              </a>
              <img className="slick-slide-image" src={slide.image} alt={slide.title}/>
            </div>
          )}

    </Slider>

</div>
      </div>
    </>
  )
}
}


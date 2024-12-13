import React from 'react'
import './Csstestimonial.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { assets } from '../../assets/assets';



const reviews = [
  {
    id: 1,
    text: "The food was fantastic! I loved it !.",
    author: "VIVEK JANGIR",
    profession :" Sr. Software Engineer ",

  },
  {
    id: 2,
    text: "Best pizza I've ever had! Will definitely order again.",
    author: "SUKHPAL SINGH",
    profession : "  Sr. Software Engineer",

  },
  {
    id: 3,
    text: "The sushi was fresh and delicious.!",
    author: "VINEET YADAV",
    profession : " Sr. Software Engineer",

  },
  {
    id: 4,
    text: "Great service and even better food. Five stars!",
    author: "RAEES AHMED",
    profession : " Sr. Software Engineer"
  },
];

const Testimonial = () => {

  
  const settings = {
    // dots: true,
    infinite:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <>
    <div className='testimonial'>
    <div className="mainreview-carousel">
      <h2>Testimonial</h2>
      <h1>What Our Customers Say!!!</h1>
     <div className="review-carousel">
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="review-slide">

            <p>"{review.text}"</p><br />
            <h4>- <i>{review.author}</i></h4>
            <h6>   <i>{review.profession}</i></h6>
          </div>
        ))}
      </Slider>
    </div>
     <div >
      <img className="pizza-img" src={assets.pizzaa} alt="" />
      </div> 
    </div>
    </div>
    </>

  )
}

export default Testimonial

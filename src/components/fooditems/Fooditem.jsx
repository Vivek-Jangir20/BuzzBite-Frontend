import React, { useContext, useEffect, useRef } from 'react';
import './Fooditem.css';
import { assets } from '../../assets/assets';
import { Storecontext } from '../../context/Storecontext';


const Fooditem = ({ id, name, price, description, image }) => {
  const { cartitems, addtocart, removefromcart, url } = useContext(Storecontext);
  const fooditemRef = useRef(); 

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.classList.remove('hidden');
        } else {
          entry.target.classList.add('hidden');
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    if (fooditemRef.current) {
      observer.observe(fooditemRef.current);
    }

    
    return () => {
      if (fooditemRef.current) {
        observer.unobserve(fooditemRef.current);
      }
    };
  }, []);

  return (
    <div ref={fooditemRef} className='food-item hidden' id='foo-item'>
      <div className="food-item-image-container">
        <img src={url + "/images/" + image} alt="" className="food-item-image" />
        {!cartitems[id]
          ? (<img className='add' onClick={() => addtocart(id)} src={assets.add_icon_white} alt="" />)
          : (<div className="food-item-counter">
              <img onClick={() => removefromcart(id)} src={assets.remove_icon_red} alt="" />
              <p>{cartitems[id]}</p>
              <img onClick={() => addtocart(id)} src={assets.add_icon_green} alt="" />
            </div>
          )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default Fooditem;

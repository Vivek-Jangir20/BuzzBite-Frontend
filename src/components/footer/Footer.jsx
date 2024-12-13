import React from 'react'
import './Footer.css'

import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      {/* <img className='footer-logo' src={assets.logo2} alt="" /> */}
        <div className="footer-content">
            <div className="footer-content-left">
               <h2>ABOUT US</h2>
               <p><strong>BUZZ BITE</strong> : Your gateway to gourmet! Experience the delight of delicious meals delivered right to your door. we bring the world of flavors to your table. Savor the taste, skip the wait.</p>
               
               <p className='thanking'><strong>THANKS FOR VISITING !</strong></p>
            </div>
            <div className="footer-content-center">
         <h2>COMPANY</h2>
         <ul>
            <li><i className="fa-sharp fa-solid fa-caret-right"></i>Home</li>
            <li><i className="fa-sharp fa-solid fa-caret-right"></i>Delivery</li>
            <li><i className="fa-sharp fa-solid fa-caret-right"></i>Privacy & Policy</li>
            <li><i className="fa-sharp fa-solid fa-caret-right"></i>FAQ's</li>
         </ul>
            </div>
            <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li><i className="fa-solid fa-location-dot"></i>Av. Paz Soldán 290, San Isidro, Lima 27 - Peru</li>
                <li><i className="fa-solid fa-phone"></i>+111 222-3333</li>
                <li><i className="fa-solid fa-envelope"></i>contact@gmail.com</li>
              </ul>
            </div>
            {/* <div className="footer-content-full-right">
              <h2>REMAIN&nbsp;&nbsp;UPDATED</h2>
           
            </div> */}
        </div>
        <div className="footer-social-icons">
          <span><a href=""><i className="fa-brands fa-facebook-f"></i></a></span>
          <span><a href=""><i className="fa-brands fa-instagram"></i></a></span>
          <span><a href=""><i className="fa-brands fa-youtube"></i></a></span>
          <span><a href=""><i className="fa-brands fa-twitter"></i></a></span>
          <span><a href=""><i className="fa-brands fa-skype"></i></a></span>
        
         {/* <img src={assets.facebook_icon} alt="" />
         <img src={assets.twitter_icon} alt="" />
         <img src={assets.linkedin_icon} alt="" /> */}
        </div>
        <hr />
        <div className="lowestsectioninfooter">
         <div><p className="footer-copyright">
            Copyright 2024 @ buzzbite.com - All Rights Reserved.
        </p></div>
         <div><a href='#navbar' type='button' className='scrollbtntotop' onClick={(e) => {e.preventDefault();
          // window.scrollTo({top: 0, behavior: 'smooth'})
          const target = document.querySelector('#navbar')
          if(target){
            target.scrollIntoView({behavior : "smooth"})
          }
         }}><i className="fa-solid fa-arrow-up"></i></a></div>
        </div>
    </div>
  )
}

export default Footer

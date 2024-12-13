import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
   <>
   <div className="thisismaincontactsection">
    <div className="background-image"></div>
   <div className="thisisinnercontactsection">
    <div className="contact-section" id='contact-section'>
    <div className="content-wrapper">
      <h2 className="section-subtitle">!! Location & Timing !!</h2>
      <h1 className="section-title">Contact with us</h1>
      <div className="cards-container">
      <div className="card address-card">
            <h3>Address</h3>
            <p><span role="img" aria-label="location">📍</span> Av. Paz Soldán 290, San Isidro, Lima 27 - Peru</p>
            <p><span role="img" aria-label="phone">📞</span> +111 222-3333</p>
            <p><span role="img" aria-label="email">📧</span> contact@gmail.com</p>
          </div>
          <div className="card hours-card">
            <h3>Hours of service</h3>
            <p>Monday to Saturday</p>
            <p>1:00 pm - 3:00 pm and 7:00 pm - 11:00 pm</p>
            <p>Sunday</p>
            <p>12:30 pm - 3:30 pm</p>
          </div>
          <div className="card support-card">
            <h3>Telephone support:</h3>
            <p>Monday to Saturday from</p>
            <p>9:00 am to 9:00 pm</p>
            <button className="reservation-button">Thanks for visiting!!</button>
          </div>
      </div>
    </div>
  </div>
  </div>
  </div>
   </>
  )
}

export default Contact

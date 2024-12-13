import React, { Profiler, useContext, useEffect, useRef, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { Storecontext } from '../../context/Storecontext'



function Navbar({setShowlogin}) {
   const [isInView, setIsInView] = useState(false); // Track if the cart icon is in view
   const cartIconRef = useRef(null); // Ref for the cart icon
   const [menu , setMenu] = useState('home')
   const {getTotalCartAmount ,token , setToken} = useContext(Storecontext)
   
//intersection observer
useEffect(() => {
   const observer = new IntersectionObserver(
     (entries) => {
       const [entry] = entries;
       setIsInView(entry.isIntersecting); 
     },
     {
       root: null, // Use the viewport
       threshold: 0.1, // Trigger when 10% of the cart icon is visible
     }
   );

   if (cartIconRef.current) {
     observer.observe(cartIconRef.current); // Observe the cart icon
   }

   
   return () => {
     if (cartIconRef.current) {
       observer.unobserve(cartIconRef.current);
     }
   };
 }, []);

const navigate = useNavigate()
const logout = () =>{
   localStorage.removeItem("token")
   setToken("")
   navigate("/")
}

  return (
    <>
    <div className="mainnavbarcontainer">
    <div className='navbar' id='navbar'>
      
     <Link to="/"><img className='navbar-logo' src={assets.logo2} alt="" /></Link> 
     <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === 'home' ? 'active' :''}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === 'menu' ? 'active' : ''}>Menu</a>
        <a href='#contact-section' onClick={() => setMenu("contact us")} className={menu === 'contact us' ? 'active' : '' }>Contact Us</a>
        <a href='#app-download' onClick={() => setMenu("mobile app")} className={menu === 'mobile app' ? 'active' : '' }>FAQ's</a>
     </ul>
     <div className="navbar-right">
        {/* <img src={assets.search_icon} alt="" /> */}
        <i className="fa-solid fa-magnifying-glass" ></i>
        <div className="navbar-search-icon">
           <Link to="/cart"> <i ref={cartIconRef} 
   className={`fa-solid fa-cart-shopping ${
      getTotalCartAmount() === 0 || !isInView ? '' : 'cart-swing'
    }`} ></i></Link>
            <div className={getTotalCartAmount()=== 0 ?"":"dot"}></div>
        </div>
        {!token? <button onClick={() => setShowlogin(true)}>Sign In</button>
        :<div className='navbar-profile'>
         {/* <img src={assets.profile_icon} alt="" /> */}
         <i className="fa-solid fa-user me-2"></i>
         <ul className="navbar-profile-dropdown" >
            <li onClick={() =>navigate("/myorders")}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
            <hr />
            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
         </ul>
         </div>}
       
     </div>
    </div>
    </div>
    </>
  )
}

export default Navbar

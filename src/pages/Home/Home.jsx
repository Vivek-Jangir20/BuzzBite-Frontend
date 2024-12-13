import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import './Home.css'
import Exploremenu from '../../components/exploremenu/Newexploremenu'
import Fooddisplay from '../../components/fooddisplay/Fooddisplay'
import Appdownloads from '../../components/appdownloads/Appdownloads'
import Testimonial from '../Testimonialfolder/Testimonial'
import Contact from  '../../pages/contactwithus/Contact'



const Home = () => {
    const [category , setCategory] =useState("All")
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <Fooddisplay category={category}/>
      <Contact/>
      <Testimonial/>
      <Appdownloads/>
    </div>
  )
}

export default Home

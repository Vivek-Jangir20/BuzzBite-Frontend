import React, { useEffect, useRef, useState } from 'react'
import './Appdownloads.css'
import { assets } from '../../assets/assets'

const Appdownloads = () => {
  const [fry , setFry] = useState('')
const hungryRef = useRef()

useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible')
        entry.target.classList.remove('hidden')
      }
      else{
        entry.target.classList.add('hidden')
        entry.target.classList.remove('visible')
      }
    })
    }, {
      threshold : 0.1
  })
  
    // observer.observe(hungryRef.current)
    const elementsToObserve = [hungryRef.current]  

    elementsToObserve.forEach((element) => {
      if(element){
        observer.observe(element)
      }
    
    })

   return () => {
    elementsToObserve.forEach((element) => {
      if(element) {
        observer.unobserve(element)
      }
    })
   }

} ,[])

  return (
    <>
    <div  className='frenchfriescomponent' id='app-download'>
    <div>
        <img ref={hungryRef} className='friesimg' src={assets.fries} alt="" />  
        </div>
      <div className='hungryhometext'>
      <p className='hungrytext'>Hungry ? </p>
      <p className='homedelivertext'><i>We Will Home  Deliver Your Food !</i></p>
      <div className='makeanorderbtndiv'>
      <a href='#food-display' type='button' className='makeanorderbtn' onClick={(event) => {event.preventDefault();
        const target = document.querySelector('#food-display')
        if(target){
          target.scrollIntoView({behavior : 'smooth'})
        }
      }} >Make An Order</a>
      </div>
      </div>
    </div>
      </>
  )
}

export default Appdownloads

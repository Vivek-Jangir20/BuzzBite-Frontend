import React, { useContext, useEffect } from 'react'
import "./Verify.css"
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { Storecontext } from '../../context/Storecontext'


const Verify = () => {
    const [searchParams ,setSearchParams] = useSearchParams()
    const success = searchParams.get("success")
    const OrderId = searchParams.get("OrderId")
    // console.log(success ,OrderId);
    const {url} = useContext(Storecontext)
    const navigate = useNavigate()

    const verifyPayment = async () =>{
        const response = await axios.post(url+"/api/order/verify",{success , OrderId})
        if(response.data.success){
            navigate("/myorders")
        }
        else{
          navigate("/")
        }
    }

     useEffect(()=>{
      verifyPayment()
     } ,[])


  return (
    <div className='verify'>
    <div className="spinner"></div>
    </div>
  )
}

export default Verify

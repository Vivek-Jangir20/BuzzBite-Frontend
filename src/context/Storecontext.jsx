import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";


// import { food_list } from "../assets/assets";

export const Storecontext = createContext(null)

const StorecontextProvider = (props) =>{

const [food_list , setFoodlist] = useState([{}])
const [cartitems , setCartitems] = useState({})
const [token , setToken] = useState("")
const url = "http://localhost:4000"

const storageToken = localStorage.getItem("token")
const decoded = storageToken && jwtDecode(storageToken)


const addtocart = async (itemId) => {
    if(!cartitems[itemId]){
        setCartitems((prev) => ({...prev,[itemId] : 1}))
    }
    else{
        setCartitems((prev) => ({...prev,[itemId] : prev[itemId] + 1}))
    }
    if(token){
        console.log(token);

        await axios.post("http://localhost:4000/api/cart/add" , {itemId} , {headers : {token}})
        console.log(itemId);
        
    }
}

const removefromcart =  async (itemId) =>{
    setCartitems((prev) => ({...prev,[itemId] : prev[itemId] - 1 }))
    if(token){
        await axios.post(url+"/api/cart/remove" ,{itemId} ,{headers : {token}})
    }
}


const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartitems){
        if(cartitems[item] > 0){
            let itemInfo = food_list.find((product) => product._id === item)
            totalAmount += itemInfo.price * cartitems[item]
        }
    }
    return totalAmount;
}

//for fetching data dynamically form server
const fetchFoodlist = async () =>{
    const response = await axios.get(url+"/api/food/list")
    setFoodlist(response.data.data)
    
}


// for loading cart data on refreshing
const loadCartData = async () => {
    try {
        const response = await axios.get(url+`/api/cart/get/${decoded.id}`).then(res => {
            setCartitems(res.data.userData.cartData)
        
        });
       
    } catch (error) {
        console.error("Error loading cart data:", error);
    }
}

//for not logging out when refreshing the page or for not want to diappear cartdata on reloading
useEffect(() => {
    async function loadData() {
        try {
            await fetchFoodlist();
            if (localStorage.getItem("token")) {
                const token = localStorage.getItem("token");
                setToken(token);

                await loadCartData(localStorage.getItem("token"));
                
                
            }
        } catch (error) {
            console.log("Error loading data:", error);
            
        }
    }
    loadData();
}, []);






    const contextvalue = {
     
        food_list ,
        cartitems,
        setCartitems,
        addtocart, 
        removefromcart,
        getTotalCartAmount,
        url,
        token,
        setToken

    }
    return(
        <Storecontext.Provider value={contextvalue}>
            {props.children}
        </Storecontext.Provider>
    )
}

export default StorecontextProvider
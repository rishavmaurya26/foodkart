import React from 'react'
import { useEffect,useState } from 'react';
import NavBar from '../../Components/Navbar/Navbar'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Restaurant.css'
import FoodItem from '../../Components/FoodItem/FoodItem';

export default function Restaurant() {
    const restaurantId = useParams().id
    const [foodItem,setFoodItem] = useState();
    const call= async() => {
        var temp = await axios.get(`/restaurant/${restaurantId}`)
        setFoodItem(temp.data)
        
    }
    useEffect( ()=> {
        call()
    },[restaurantId])
    // console.log(restaurantId)
    console.log(foodItem)
  return (
    <div >
        <NavBar></NavBar>
    {
        foodItem?.map((ele) => ( <FoodItem foodItem={ele}/> ))
    }
    </div>
  )
}

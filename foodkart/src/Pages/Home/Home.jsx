import React, { useEffect,useState } from 'react'
import NavBar from '../../Components/Navbar/Navbar'
import RestaurantCard from '../../Components/RestaurantCard/RestaurantCard';
import FoodCarousel from '../../Components/FoodCarousel/FoodCarousel';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import './Home.css'

export default function Home()
{
    const farr = [1,2,3,4,5,6,7,8]
    const [restaurants,setRestaurants] = useState()
    var call = async () => {
        var temp =  await axios.get('/restaurant')
        setRestaurants(temp.data)
    };
    useEffect( () =>{
        call()
    },[]);
    // console.log(restaurants)
    
    return(
        <div className='home-container'>
        <NavBar></NavBar>
        <FoodCarousel></FoodCarousel>
        <h3 className='mx-5'>Order Your favoutie food</h3>
        <Container fluid className='d-flex mb-4 align-items-center justify-content-start overflow-scroll foodItemContainer'responsive>
        
            {
                farr.map((ele) => (
                <Container className='ml-1.5 mr-1.5'>
                    <Image key={ele} className='foodItemImg ' src='foodItem.jpg' roundedCircle/>
                    <div className='text-center fs-5 fw-bold'>Food</div>
                </Container>
                ))
            }
        </Container>
        <h3 className='mx-5 mb-4'>Order from your favourite restaurant</h3>
        <Container fluid className='d-flex flex-wrap p-2 align-items-center justify-content-evenly'>
            {
                restaurants?.map((ele) => (<RestaurantCard key={ele._id} restaurant={ele} />))
            }
        
        </Container>
        </div>
    )
}
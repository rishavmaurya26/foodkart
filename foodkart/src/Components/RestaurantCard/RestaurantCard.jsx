import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './RestaurantCard.css'

export default function RestaurantCard(props) {
  const id = props.restaurant._id
  // console.log(id)
  const navigate = useNavigate()
  const showMenu = () => {
      navigate(`/restaurant/${id}`)
  }
  return (
    <Card className="card mb-5">
    <Card.Img variant="top" src="restaurant.jpg" className='card-img' />
    <Card.Body>
      <Card.Title>{props.restaurant.name}</Card.Title>
      <Card.Text>
        {props.restaurant.cuisine}
        <br/>
        Rating: {props.restaurant.rating}
      </Card.Text>
      <Button variant="secondary" onClick={showMenu}>Check Menu</Button>
    </Card.Body>
  </Card>
  )
}
import React from 'react'
import { Container,Image,Form,InputGroup,Button } from 'react-bootstrap';
import './FoodItem.css'


export default function FoodItem(props) {
    console.log(props.foodItem)
  return (
    <Container className='foodItem p-2 mb-3 d-flex align-items-center justify-content-evenly mt-3'>
            <Image className="foodImage " src='http://localhost:3000/food.jpg' alt="foodItem"/> 
            <div className='aboutFood'>
                <h5 className=''>{props.foodItem?.name}</h5>
                <p  className=''>{props.foodItem?.description}</p>
                <h5 className=''>{props.foodItem?.restaurant_name}</h5>
                <h5 className=''>{props.foodItem?.rating}</h5>
                <h5 className=''>Rs.{props.foodItem?.price}</h5>
            </div>
            <div className='orderFood'>
                <h5>Order Now</h5>
                <div>
                <h5>Size</h5>
                <Form.Check inline label="Full" name="group1" type={'radio'} id={'inline-radio-1'}/>
                <Form.Check inline label="Half" name="group1" type={'radio'} id={'inline-radio-1'}/>
                </div>
                <h5>Quantity</h5>
                <InputGroup size="sm" className="mb-2" style={{'width':"20%"}} >
                <Form.Control aria-label="Small" type="number" min='0' aria-describedby="inputGroup-sizing-sm"/>
                </InputGroup>
                <Button variant="secondary">Pay</Button>
            </div>
        </Container>
  )
}

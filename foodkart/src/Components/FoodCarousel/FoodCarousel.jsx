import Carousel from 'react-bootstrap/Carousel';
import './FoodCarousel.css';
export default function FoodCarousel() {
  return (
    <Carousel className='Carousel mb-5'>
      <Carousel.Item interval={1000}>
        <img src="burger.jpg" text="First slide" alt="burger_image" fluid/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src="pizza.jpg" text="First slide" alt="burger_image" fluid/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000} >
        <img src="chicken.jpg" text="First slide" alt="burger_image" fluid/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


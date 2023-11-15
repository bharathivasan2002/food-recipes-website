import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import {food} from './images/food-1.jpg'
import {food2} from './images/food-2.jpg'
import {food3} from './images/food-3.jpg'
import {food4} from './images/food-4.jpg'
import './style.css'

function Slider() {
  return (
    <Container fluid className='my-4'>
        <Row className='justify-content-center'> 
            <Col lg={8}> 
                <Carousel data-bs-theme="light">
                <Carousel.Item interval={1000}>
                    <Image className='w-100' src="https://wallpapers.com/images/high/food-4k-jx0j7rqea6yv9phh.webp" fluid />
                    <Carousel.Caption>
                    <h3>Testy Temptation</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <Image className='w-100' src="https://wallpapers.com/images/high/food-4k-1pf6px6ryqfjtnyr.webp" fluid />
                    <Carousel.Caption>
                    <h3>Testy Temptation</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                <Image className='w-100' src="https://wallpapers.com/images/high/food-4k-3gsi5u6kjma5zkj0.webp" fluid />
                    <Carousel.Caption>
                    <h3>Testy Temptation</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                <Image className='w-100' src="https://wallpapers.com/images/high/food-4k-aov9fe9ucfmi7507.webp" fluid />
                    <Carousel.Caption>
                    <h3>Testy Temptation</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
             </Col>
         </Row>
     </Container>
  );
}

export default Slider;
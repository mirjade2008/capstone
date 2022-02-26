import  React,{ Component } from  'react';
import GABP from '../img/GABP.jpg'
//import Navbar from '../components/Navbar';
// import ImageSlider from '../components/ImageSlider';
// import { SliderData } from './components/SliderData';
import Slideshow from '../components/ImageSlider';
import { Card, Button } from 'react-bootstrap';
import PlacesImg from '../img/places-to-stay.jpg';
import ThingsImg from '../img/things-to-do.jpg';
import EatImg from '../img/Eat-&-drink.jpg';
import TripImg from '../img/trip-ideas.jpg';


const Home = () =>{
  return (
    <div>    
    <h1>Welcome to Cincinnati Ohio!</h1>
    <img src='C:\Users\kable\Documents\codingProjects\cinci\src\img\Cincy-at-night.jpg' alt=''></img>           

<img src={GABP} alt="mypic"/>
<h2>Join the Queen City for your next adventure!</h2>

<Slideshow />



        <Card style={{ width: '24rem' }} />
      <Card.Img variant="top" src={ThingsImg} alt='' />
      <Card.Body>
        <Card.Title>Things To Do</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary">Check It Out</Button>
      </Card.Body>
    

    <Card style={{ width: '24rem' }}>
      <Card.Img variant="top" src={PlacesImg} alt='' />
      <Card.Body>
        <Card.Title>Places To Stay</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary">Check It Out</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={EatImg} alt='' />
      <Card.Body>
        <Card.Title>Eat & Drink</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary">Check It Out</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={TripImg} alt='' />
      <Card.Body>
        <Card.Title>Trip Ideas</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary">Check It Out</Button>
      </Card.Body>
    </Card>
    </div>

  )};

  export default Home;
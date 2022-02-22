import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
// import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
// import GABP from './img/GABP.jpg';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import imageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import PlacesImg from './img/places-to-stay.jpg';
import ThingsImg from './img/things-to-do.jpg';
import EatImg from './img/Eat-&-drink.jpg';
import TripImg from './img/trip-ideas.jpg';
import Navbar from './components/Navbar';







function App() {

  return (
    <div className="App">
      <Router>      
        <Route exact path = '/' component={Home} />
        <Route path = '/about' component={About} />
        <Route path = '/contact' component={Contact} />        
      </Router>



      <Card style={{ width: '24rem' }}>
      <Card.Img variant="top" src={ThingsImg} alt='' />
      <Card.Body>
        <Card.Title>Things To Do</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary">Check It Out</Button>
      </Card.Body>
    </Card>

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




export default App;


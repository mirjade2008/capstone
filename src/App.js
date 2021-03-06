import React from 'react';
import Navbar from './pages/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';
// import GABP from './img/GABP.jpg';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
// import imageSlider from './components/ImageSlider';
// import { SliderData } from './components/SliderData';



function App() {

  return (
    
      <Router> 
      <Navbar />
      <Route>   
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
      </Route> 
         
      </Router>

  
      
   
  );
}
  

export default App;


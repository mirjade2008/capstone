import  React,{ Component } from  'react';
import GABP from '../img/GABP.jpg'
//import Navbar from '../components/Navbar';
// import ImageSlider from '../components/ImageSlider';
// import { SliderData } from './components/SliderData';
import Slideshow from '../components/ImageSlider';

class Home extends Component {
    render() {
        return (
            <div>               
                <h1>Welcome to Cincinnati Ohio!</h1>
                
      <img src={GABP} alt="mypic"/>
       <h2>Join the Queen City for your next adventure!</h2>
      <p>
      Cincinnati Ohio was settled in 1788 and is the cultural hub of the Cincinnati metropolitan area with an estimated population of 2,190,209.  It is the third largest city in Ohio and 64th in the United States.  It is home to three major sports teams: the Cincinnti Reds of MLB, the Cincinnati Bengals of the NFL, and FC Cincinnati of MLS.  We are also home to the Cincinnati Cyclones, a minor league ice hickey team. The University of Cincinnati, a municipal college founded in 1819 is now ranked one of the 50 largest in the United States.  Cincinnati is also the birthplace of William Howard Taft, the 27th President of the United States.  Cincinnati is host to numerous food flavors infused from all around the culinary world.  Cincinnati chili is the areas best known regional food.  Be sure to attend the Taste of Cincinnati, one of the largest street festivals in the U.S. for an insight into our delicious restaurants and bars!
      </p>
          <div>
            <Slideshow />
          </div>

          <div>
            <img src=''></img>
          </div>

   







      {/* const slideImages = [
  'images/slide_1.jpg', 
  'images/slide_2.jpg',
  'images/slide_3.jpg',
  'images/slide_4.jpg',
  'images/slide_5.jpg',
  'images/slide_6.jpg',
  'images/slide_7.jpg',
  'images/slide_8.jpg',
  'images/slide_9.jpg',
  'images/slide_10.jpg',
  'images/slide_11.jpg',
  'images/slide_12.jpg'
];

const Slideshow = () => {
    //return (
      
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
              </div>
            </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
              </div>
            </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
              </div>
            </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
              </div>
            </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
              </div>
            </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
              </div>
            </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
              </div>
            </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
              </div>
            </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
        

    };
   
  ); */
  }
            </div>
        )}
    
}

export default Home;
import  React,{ Component } from  'react';
import GABP from '../img/GABP.jpg'
//import Navbar from '../components/Navbar';

class Contact extends Component {
    render() {
        return (
            <div>               
                <h1>Welcome to Contact!</h1>
      <img src={GABP} alt="mypic"/>
       <h2>Join the Queen City for your next adventure!</h2>
      <p>
      Cincinnati Ohio was settled in 1788 and is the cultural hub of the Cincinnati metropolitan area with an estimated population of 2,190,209.  It is the third largest city in Ohio and 64th in the United States.  It is home to three major sports teams: the Cincinnti Reds of MLB, the Cincinnati Bengals of the NFL, and FC Cincinnati of MLS.  We are also home to the Cincinnati Cyclones, a minor league ice hickey team. The University of Cincinnati, a municipal college founded in 1819 is now ranked one of the 50 largest in the United States.  Cincinnati is also the birthplace of William Howard Taft, the 27th President of the United States.  Cincinnati is host to numerous food flavors infused from all around the culinary world.  Cincinnati chili is the areas best known regional food.  Be sure to attend the Taste of Cincinnati, one of the largest street festivals in the U.S. for an insight into our delicious restaurants and bars!
      </p>
            </div>
        )};

        }
    export default Contact;
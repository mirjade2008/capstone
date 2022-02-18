import React from 'react';
import { NavLink } from 'react-router-dom'
import $ from 'jquery'



const Navbar = () => {
    const handleClick = e => {
      e.preventDefault();
      document.getElementsByClassName('navTrigger')[0].classList.toggle('active');
      document.getElementById('mainListDiv').classList.toggle('show_list');
      $('#mainListDiv').fadeIn();
    }

    return (
        <header>
        <nav className="nav">
            <div className="container">
                <div className="logo">
                    <NavLink to="/">Home</NavLink>
                </div>
                <div id="mainListDiv" className="main_list">
                    <ul className="navlinks">
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/addattraction">Sneak Peek</NavLink></li>
                    </ul>
                </div>
                <span onClick={handleClick} className="navTrigger">
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
            </div>
        </nav>
        </header>
    )
}

export default Navbar;


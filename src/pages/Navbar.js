import React from "react";
import { Nav, NavLink, NavLogo, Bars, NavMenu } from '../styles/Navbar.style.js'


const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
            Home
            </NavLogo>
            <Bars />

            <NavMenu>
                {/* <NavLink to="/" 
                  activeStyle={{ color:'black' }}
                >
                    About
                </NavLink> */}
                <NavLink to="/about" 
                  activeStyle={{ color: 'black' }} 
                  >
                    About
                </NavLink>
                <NavLink to="/contact" 
                  activeStyle={{ color: 'black' }}
                >
                    Contact Us
                </NavLink>
                <NavLink to="/signin" 
                  activeStyle={{ color: 'black' }}
            ></NavLink>
            </NavMenu>
            </Nav>
        </>
    );
};
export default Navbar;










// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () =>{
//     return (
//         <div>
//             <li>
//                 <Link to='/'>Home</Link>
//             </li>
//             <li>
//                 <Link to='/about'>About</Link>
//             </li>
//             <li>
//                 <Link to='/contact'>Contact</Link>
//             </li>
//         </div>
//     )
    

// }

      
//     export default Navbar;
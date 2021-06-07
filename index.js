import React from 'react';
import { NavLink } from 'react-router-dom';
// import $ from 'jquery';





const Navbar = () => {
    // const handleClick = e => {
    //   e.preventDefault();
    //   document.getElementsByClassName('navTrigger')[0].classList.toggle('active');
    //   document.getElementById('mainListDiv').classList.toggle('show_list');
    //   $('#mainListDiv').fadeIn();
    // }


    
    return (
        <header>
        <nav className="nav">
            <div className="container">
                <div className="logo">
                    <NavLink to="/">Cincinnati Tourism- Spring 2021</NavLink>
                </div>
                <div id="mainListDiv" className="main_list">
                    <ul className="navlinks">
                    <li><NavLink to="/Home">Home</NavLink></li>
                    <li><NavLink to="/Covid 19">Covid 19</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Our Story">Our Story</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
             </div>
           </nav>
        </header>
    )
};

<Navbar fixed="top" />


export default withRouter(Navbar)
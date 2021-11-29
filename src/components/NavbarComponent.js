import React from 'react'
// import image into to application
import Logo from '../assets/logo3.png';
import {Link} from 'react-router-dom';
import "../styles/NavbarStyle.css"
import Category from '../services/CategoryService.js'

function NavbarComponent() {
    return (
        <div className="navbar">
            <div className="leftSide">
                <img src={Logo}></img>
            </div>
            <div className="rightSide">
                <Link to="/"> Vegan </Link>
                <Link to="/"> Low Fat </Link>
            </div>      
        </div>
    )
}

export default NavbarComponent;
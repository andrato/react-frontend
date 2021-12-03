import React from 'react'
// import image into to application
import Logo from '../assets/logo3.png';
import {Link, NavLink} from 'react-router-dom';
import "../styles/NavbarStyle.css"
import ReorderIcon from '@mui/icons-material/Reorder';
// import Category from '../services/CategoryService.js'

function NavbarComponent() {
    return (
        <div className="navbar">
            <div className="leftSide">
                <img src={Logo}></img>
            </div>
            <div className="rightSide">
                <NavLink to="/vegan"> Vegan </NavLink>
                <NavLink to="/lowfat"> Low Fat </NavLink>
                <button>
                    <ReorderIcon />
                </button>
            </div>      
        </div>
    )
}

export default NavbarComponent;
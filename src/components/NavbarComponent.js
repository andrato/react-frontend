import React from 'react'
import ReorderIcon from '@mui/icons-material/Reorder';
import TypeService from '../services/TypeService';

import {Link, NavLink} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {FiUser, FiShoppingCart} from "react-icons/fi";

import Logo from '../assets/logo3.png';

import "../styles/NavbarStyle.css";


function NavbarComponent(props) {

    const navigate = useNavigate();
  
    const handleRoute = () =>{ 
        navigate("/");
    }

    const [diets, setDiets] = React.useState([]);

    React.useEffect(() => { 
        setDiets([
            {id: 0, name: "VEGAN"},
            {id: 1, name: "LOW_SUGARS"},
            {id: 2, name: "PROTEIN" }
        ]);
        // TypeService.getTypes().then((response) => {
        //     console.log("navbar - start");
        //     //setDiets(response.data)
        //     console.log("navbar - end");
        // })
    }, []);

    return (
        <div className="navbar">
            <div className="leftSide">
                <Link to="/">
                    <img src={Logo}></img>
                </Link>
            </div>
            <div className="rightSide">
                { 
                    diets.map(
                        (diet, key) => {
                            return <NavLink to={`/dietType/${diet.id}`}> {diet.name} </NavLink>
                        }
                    )
                }
                <button>
                    <ReorderIcon />
                </button>
            </div>
            {/* <div className="endNav" id="beforeIcons">
                <Link to={'/cart'}> <FiShoppingCart /> </Link>
            </div>   */}
            <div className="endNav" id="afterIcons">
                <Link to={'/login'}> <FiUser /> </Link>
            </div>  
        </div>
    )
}

export default NavbarComponent;
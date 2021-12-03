import React from 'react'
import Logo from '../assets/logo3.png';
import {Link, NavLink} from 'react-router-dom';
import "../styles/NavbarStyle.css"
import ReorderIcon from '@mui/icons-material/Reorder';
import { useNavigate } from "react-router-dom";
import TypeService from '../services/TypeService';
import {FiUser, FiShoppingCart} from "react-icons/fi";

function NavbarComponent(props) {

    const navigate = useNavigate();
  
    const handleRoute = () =>{ 
        navigate("/");
    }
    const [diets, setDiets] = React.useState([]);

    React.useEffect(() => { 
        TypeService.getTypes().then((response) => {
            setDiets(response.data)
        })
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
                            return <Link to={`/dietType/${diet.id}`}> {diet.name} </Link>
                        }
                    )
                }
                <button>
                    <ReorderIcon />
                </button>
            </div>
            <div className="endNav" id="beforeIcons">
                <FiShoppingCart />
            </div>  
            <div className="endNav" id="afterIcons">
                <FiUser />
            </div>  
        </div>
    )
}

export default NavbarComponent;
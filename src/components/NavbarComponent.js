import React from 'react'
import ReorderIcon from '@mui/icons-material/Reorder';
import {Link, NavLink} from 'react-router-dom';
import {FiUser} from "react-icons/fi";
import Logo from '../assets/logo3.png';
import "../styles/NavbarStyle.css";
import TypeService from '../services/TypeService';

function NavbarComponent(props) {

    const [diets, setDiets] = React.useState([]);

    React.useEffect(() => { 
        // setDiets([
        //     {id: 0, name: "Vegan"},
        //     {id: 1, name: "Low Sugars"},
        //     {id: 2, name: "Protein" }
        // ]);
        TypeService.getTypes().then((response) => {
            setDiets(response.data)
        })
    }, []);

    return (
        <div className="navbar">
            <div className="leftSide">
                <Link to="/">
                    <img src={Logo} alt="logo"></img>
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
            <div className="endNav" id="afterIcons">
                <Link to={'/login'}> <FiUser /> </Link>
            </div>  
        </div>
    )
}

export default NavbarComponent;



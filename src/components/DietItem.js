import React from 'react';
import { useNavigate } from "react-router-dom";
// import {Link, NavLink} from 'react-router-dom';
import Image from "../assets/1.jpeg";

export default function DietItem({id, image, name, price}) {

    image = Image;
    const navigate = useNavigate();
  
    const handleRoute = () => { 
        navigate(`/diet/${id}`);
    }

    const handleCart = () => {
        navigate('/');
    }

    return (
        <div className="menuItem" >
            <div onClick={handleRoute}>
                <div style={{ backgroundImage: `url(${image})` }}>
                </div>
                <h3 style={{ paddingLeft: 17 + 'px'}}> {name} </h3>
            </div>
            <div className="item-end">
                <div id="price">{price}LEI</div>
                <div id="buton"><button className="btn btn-primary" onClick={handleCart}>Buy</button></div>
            </div>
        </div>
    )
}

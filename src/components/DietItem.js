import React from 'react';
import { useNavigate } from "react-router-dom";
// import {Link, NavLink} from 'react-router-dom';

export default function DietItem({id, image, name, price}) {

    const navigate = useNavigate();
  
    const handleRoute = () =>{ 
        navigate(`/diet/${id}`);
    }

    return (
        <div className="menuItem" onClick={handleRoute}>
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h2 style={{ paddingLeft: 17 + 'px'}}> {name} </h2>
            <p> {price}LEI </p>
        </div>
    )
}

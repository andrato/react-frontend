import React from 'react';
import { useNavigate } from "react-router-dom";
// import {Link, NavLink} from 'react-router-dom';
import Image from "../assets/1.jpeg";
import BillingService from '../services/BillingService';

export default function DietItem({id, image, name, price}) {

    image = Image;
    const navigate = useNavigate();
  
    const handleRoute = () => { 
        navigate(`/diet/${id}`);
    }

    function handleBuy() { 
        console.log(id);
        const obj = {
            "userDto":{
                "id": 1
            },
            "dietDto": {
                "id": id
            },
            "paymentDto": {
                "amount": price
            }
        };

        // to do: if order succedden, then the page should be reloaded
        // and the user should be able to access the foods
        // until user does not buy the diet, the foods will be grayed out
        BillingService.buyDiet(obj) 
        .then( (response) => { alert("Order succedded!"); })
        .catch( (error) => { alert("An error occured! Please try again later!"); console.log(error); });
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
                <div id="buton"><button className="btn btn-primary" onClick={handleBuy}>Buy</button></div>
            </div>
        </div>
    )
}

import React from 'react';
import { useNavigate } from "react-router-dom";
import Image from "../assets/1.jpeg";
import "../styles/Food.css"


export default function FoodItem({id, name, calories}) {
    function handleClick() {
        alert(`Element ${id} was clicked`);
    }

    return (
        <div>
            <div className="foodItem">
                <div id="toate" onClick={handleClick}>
                    <div className="info-food" id="name">{name}</div>
                    <div className="info-food" id="calories">Calories: {calories}</div>
                </div>
            </div>
        </div>
    )
}

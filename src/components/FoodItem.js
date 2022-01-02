import React from 'react';
import { useNavigate } from "react-router-dom";
import Image from "../assets/1.jpeg";
import FoodService from '../services/FoodService';
import "../styles/Food.css"


export default function FoodItem({id, name, calories}) {

    const [showIngredients, setShowIngredients] = React.useState(false);
    const [ingredients, setIngredients] = React.useState([]);

    React.useEffect(() => { 
        FoodService.getIngredientsByFood(id).then((response) => {
            setIngredients(response.data)
        })
    }, []);

    function handleClick() {
        // alert(`Element ${id} was clicked`);
        setShowIngredients(!showIngredients);
    }

    const mystyle = {
        marginLeft: "30px"
      };
      
    return (
        <div>
            <div className="foodItem">
                <div id="toate" onClick={handleClick}>
                    <div className="info-food" id="name">{name}</div>
                    <div className="info-food" id="calories">Calories: {calories}</div>
                </div>
            </div>
            <div>
                {showIngredients && <p style={mystyle}>
                    {
                        ingredients.map(
                            (ingredient, key) => {
                                return <span>{ingredient.name}, </span>
                            }
                        )
                    }      
                </p>}
            </div>
        </div>
    )
}

import React from 'react';
import { useNavigate } from "react-router-dom";
// import {Link, NavLink} from 'react-router-dom';
import Image from "../assets/1.jpeg";
import PaymentService from '../services/PaymentService';
import FoodService from '../services/FoodService';

export default function DietItem({id, image, name, price}) {

    const [diets, setDiets] = React.useState([]);
    const [foods, setFoods] = React.useState([]);
    
    const navigate = useNavigate();
    image = Image;
  
    const handleRoute = () => { 
        navigate(`/diet/${id}`);
    }

    React.useEffect(() => { 
        // ToDo: replace 1 with the current logged in user, if it exists, if not, then empty
        PaymentService.getDiets(13).then((response) => {
            setDiets(response.data);
        })
        .catch((error) => {console.log(error)});
    }, []);

    // check if receipe is already bought by user
    function isDietBought(){
        let obj = diets.find(diet => diet.userId === id);
        // console.log(obj);
        return obj;
    }

    console.log(diets);
    isDietBought();

    function handleBuy() { 
        console.log(id);
        const obj = {
            "userId": 13,
            "dietId": Number(id),
            "amount": Number(price)
        };

        // to do: if order succedden, then the page should be reloaded
        // and the user should be able to access the foods
        // until user does not buy the diet, the foods will be grayed out
        PaymentService.addPayment(obj) 
        .then( (response) => { console.log("e bine"); handleRoute(); })
        .catch( (error) => { console.log(error); alert("Payment error");});
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

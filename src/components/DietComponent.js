import { useNavigate } from "react-router-dom";
import React from 'react'
import DietService from '../services/DietService'
import { useParams } from 'react-router-dom';
import '../styles/DietDetails.css';
import Image from "../assets/1.jpeg";
import FoodService from '../services/FoodService';
import PaymentService from '../services/PaymentService';
import FoodItem from "./FoodItem";

function DietComponent (props){

    // get id from url 
    let { id } = useParams(); 

    const [diet, setDiet] = React.useState('');
    const [foods, setFoods] = React.useState([]);
    const [diets, setDiets] = React.useState([]);
    const [showButton, setShowButton] = React.useState(true);
    const navigate = useNavigate();

    React.useEffect(() => { 
        DietService.getDiet(id).then((response) => {
            setDiet(response.data);
            // console.log(response.data);
        })
    },'');

    React.useEffect(() => { 
        FoodService.getFoodsByDiet(id).then((response) => {
            setFoods(response.data);
            // console.log(response.data);
        })
    },[]);

    React.useEffect(() => { 
        // ToDo: replace 1 with the current logged in user, if it exists, if not, then empty
        PaymentService.getDiets(13).then((response) => {
            setDiets(response.data);
            // isDietBought();
        })
        .catch((error) => {console.log(error)});
    }, []);

    React.useEffect(() => {
        isDietBought();
      });

    // check if receipe is already bought by user
    function isDietBought(){
        console.log(diets);
        // console.log(diets[0].dietId);
        // console.log(id);
        // const obj = diets.find(diet => diet.dietId === id);
        
        // console.log("verify diet");
        // console.log(diets);
        // console.log(obj);

        // if(obj){
        //     setShowButton(false);
        // }
        for(let x of diets){
            if(x.dietId === Number(id)) {
                setShowButton(false);
                break;
            }
        }
    }

    function handleBuy() { 
        console.log(id);
        // const obj = {
        //     "userDto":{
        //         "id": 1
        //     },
        //     "dietDto": {
        //         "id": id
        //     },
        //     "paymentDto": {
        //         "amount": price
        //     }
        // };
        const obj = {
            "userId": 13,
            "dietId": Number(id),
            "amount": Number(diet.price)
        };

        // to do: if order succedden, then the page should be reloaded
        // and the user should be able to access the foods
        // until user does not buy the diet, the foods will be grayed out
        PaymentService.addPayment(obj) 
        .then( (response) => { navigate(`/diet/${id}`); })
        .catch( (error) => { console.log(error); alert("Payment error");});
    }

    //console.log(diet);
    // isDietBought();
    return (
        <div className="menu">
            {
                <div className="totul">
                    <div id="the-first">
                        <div className="doi">
                                <h2>{diet.name}</h2>
                                {/* <pre>Goal: <span>{diet.price}</span></pre> */}
                                <pre>Maximum calories: <span>{diet.maximumCalories}</span></pre>
                                <pre>Price: <span>{diet.price} LEI</span></pre>
                                <pre>Description: <span>...</span></pre>
                                
                        
                                {showButton &&<div id="div-btn" onClick={handleBuy}>
                                    <button>Buy</button>
                                </div>}
                        </div>
                        <div className="unu"> 
                            <img src={Image} alt="Paris" width="450" />
                        </div>
                    </div>
                    <div className="the-second">
                        <h2>Breakfast</h2>
                        {
                            foods.map(
                                (food, key) => {
                                    if(food.category === "BREAKFAST")
                                        return <FoodItem id={food.id} name={food.name} calories={food.calories} shouldBuy={showButton}/>
                                }
                            )
                        }
                    </div>
                    <div className="the-second">
                        <h2>Lunch</h2>
                        {
                            foods.map(
                                (food, key) => {
                                    if(food.category === "LUNCH")
                                        return <FoodItem id={food.id} name={food.name} calories={food.calories} shouldBuy={showButton}/>

                                }
                            )
                        }
                    </div>
                    <div className="the-second">
                        <h2>Dinner</h2>
                        {
                            foods.map(
                                (food, key) => {
                                    if(food.category === "DINNER")
                                        return <FoodItem id={food.id} name={food.name} calories={food.calories} shouldBuy={showButton}/>
                                }
                            )
                        }
                    </div>
                    <div className="the-second">
                        <h2>Snacks</h2>
                        {
                            foods.map(
                                (food, key) => {
                                    if(food.category === "SNACKS")
                                        return <FoodItem id={food.id} name={food.name} calories={food.calories} shouldBuy={showButton}/>
                                }
                            )
                        }
                    </div>
                </div>
            }   
        </div>
    )
}

export default DietComponent;
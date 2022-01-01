import { Navigation } from '@mui/icons-material'
import React from 'react'
import DietService from '../services/DietService'
import { useParams } from 'react-router-dom';
import '../styles/DietDetails.css';
import Image from "../assets/1.jpeg";
import FoodService from '../services/FoodService';
import BillingService from '../services/BillingService';

function DietComponent (props){

    // get id from url 
    let { id } = useParams(); 

    const [diet, setDiet] = React.useState('');
    const [foods, setFoods] = React.useState([]);
    const [diets, setDiets] = React.useState([]);

    React.useEffect(() => { 
        DietService.getDiet(id).then((response) => {
            setDiet(response.data);
            console.log(response.data);
        })
    },'');

    React.useEffect(() => { 
        FoodService.getFoodsByDiet(id).then((response) => {
            setFoods(response.data);
            console.log(response.data);
        })
    },[]);

    React.useEffect(() => { 
        // ToDo: replace 1 with the current logged in user, if it exists, if not, then empty
        BillingService.getDiets(1).then((response) => {
            setDiets(response.data);
        })
        // .catch((error) => {alert(error)});
    }, []);

    // check if receipe is already bought by user
    function isDietBought(){
        let obj = diets.find(diet => diet.dietDto.id === id);
        // console.log(obj);
        return obj;
    }

    console.log(diets);
    isDietBought();

    function handleBuy() { 
        //console.log(diet.id);

        const obj = {
            "userDto":{
                "id": 1
            },
            "dietDto": {
                "id": diet.id
            },
            "paymentDto": {
                "amount": diet.price
            }
        }

        // to do: if order succedden, then the page should be reloaded
        // and the user should be able to access the foods
        // until user does not buy the diet, the foods will be grayed out
        BillingService.buyDiet(obj) 
        .then( (response) => { alert('Order succedded!');  })
        .catch( (error) => { alert("An error occured! Please try again later!"); console.log(error); });
    }

    //console.log(diet);
    console.log(foods)
    return (
        <div className="menu">
            {
                <div className="totul">
                    <div id="the-first">
                        <div className="doi">
                                <h2>{diet.name}</h2>
                                {/* <pre>Goal: <span>{diet.price}</span></pre> */}
                                <pre>Maximum calories: <span>{diet.maximumCalories}</span></pre>
                                <pre>Price: <span>{diet.price}</span></pre>
                                <pre>Description: <span>...</span></pre>
                                <div id="div-btn" onClick={handleBuy}>
                                    <button>Buy</button>
                                </div>
                        </div>
                        <div className="unu">
                            <img src={Image} alt="Paris" width="450" />
                        </div>
                    </div>
                    {/* <h2 style={{paddingTop:20}}>Receipes</h2> */}
                    <div className="the-second">
                        <h2>Breafast</h2>
                    </div>
                    <div className="the-second">
                        <h2>Lunch</h2>
                    </div>
                    <div className="the-second">
                        <h2>Dinner</h2>
                    </div>
                </div>
            }   
        </div>
    )
}

export default DietComponent;
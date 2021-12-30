import { Navigation } from '@mui/icons-material'
import React from 'react'
import DietService from '../services/DietService'
import { useParams } from 'react-router-dom';
import '../styles/DietDetails.css';
import Image from "../assets/1.jpeg";
import FoodService from '../services/FoodService';

function DietComponent (props){

    // get id from url 
    let { id } = useParams(); 

    const [diet, setDiet] = React.useState('');
    const [foods, setFoods] = React.useState([]);

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
                                <div id="div-btn">
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
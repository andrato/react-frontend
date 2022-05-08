import React from 'react';
import { useNavigate } from "react-router-dom";
import {NavLink} from 'react-router-dom';
import '../styles/Login.css';
import DietService from '../services/DietService';
import { useParams } from 'react-router-dom';

function AllDietsUpdateComponent (props) {
    let { id, dietId } = useParams(); 

    const [diet, setDiet] = React.useState('');
    const navigate = useNavigate();
    const is_admin = localStorage.getItem("is_admin");

    
    React.useEffect(() => { 
        DietService.getDiet(dietId).then((response) => {
            setDiet(response.data);
        })
    },[dietId]);

    function handleSubmit(e) {
        e.preventDefault();
        const {name, price} = e.target.elements;

        if(name.value) {
            diet.name = name.value;
        }
        if(price.value){
            diet.price = price.value;
        }
        const dietInfo = { "id": diet.id
                         , "name": diet.name
                         , "price": diet.price
                         , "maximumCalories": diet.maximumCalories
                         , "dietGoalId": diet.dietGoalId
                         , "dietTypeId": diet.dietTypeId};

        console.log(dietInfo);

        DietService.updateDiet(dietId, dietInfo)
        .then( (response) => { navigate(`/users/${id}/alldiets`); /*navigate('/login');*/})
        .catch( (error) => { alert(error) }); //"Could not register! Please try again!",
    }

    return (
        <div className="all">
            <div className="one">
                <div className="nav">
                    <NavLink to={`/users/${id}`} className="inactive"> Account Info </NavLink>
                    <NavLink to={`/users/${id}/updates`} className="inactive"> Updates </NavLink>
                    <NavLink to={`/users/${id}/diets`} className="inactive"> My diets </NavLink>
                    {is_admin!="false" && <div className="line"></div>}
                    {is_admin &&<NavLink to={`/users/${id}/allusers`} className="inactive"> All users </NavLink>}
                    {is_admin &&<NavLink to={`/users/${id}/alldiets`} className="inactive"> All diets </NavLink>}
                    {is_admin &&<NavLink to={`/users/${id}/allbillings`} className="inactive"> All billings </NavLink>}
                    <div className="line"></div>
                </div>
                <div className="logout">
                    <NavLink to={`/logout`} className="inactive"> Log out </NavLink>
                </div>
            </div>
                
            <div id="altceva">
                <form onSubmit={handleSubmit}>
                    {
                        <div>
                            <div>
                                <label style={{display: 'block'}}>Diet name: </label>
                                <input className="update" id="name" placeholder={diet.name}/>
                            </div>
                            <div>
                                <label style={{display: 'block'}}>Diet price: </label>
                                <input className="update" id="price" placeholder={diet.price}/>
                            </div>
                        </div>
                    }
                    <button id="butonUpdate" type="submit" className="loginButton">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default AllDietsUpdateComponent;
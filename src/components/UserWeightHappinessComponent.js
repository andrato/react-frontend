import React from 'react';
import { useParams } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import { Slider } from '@mui/material';
// import moment from 'moment';
import { useNavigate } from 'react-router';
import '../styles/User.css';
import WeightService from '../services/WeightService';

function UserWeightHappinessComponent(props) {

    let { id } = useParams(); 

    const navigate = useNavigate();
    const is_admin = localStorage.getItem("is_admin");


    function handleSubmit(e) {
        e.preventDefault();
        const { weight } = e.target.elements;

        const weightObj = {
            value: Number(weight.value),
            userId: Number(id)
        }
        
        let ok = false;

        if(Number(weight.value) < 400 && Number(weight.value) >= 30){
            ok = true;
            WeightService.setWeight(weightObj)
                .then( (response) => { console.log('E bine pe weight');  })
                .catch( (error) => { alert("An error occured! Please try again later!"); console.log(error); });
        }

        if(ok === true) {
            setTimeout(() => {  navigate(`/users/${id}`); }, 1000);
        }
        else {
            alert("No valid changes made! Cannot submit");
        }
    }

    return (
        <div className="all">
            <div className="one">
                <div className="nav">
                    <NavLink to={`/users/${id}`} className="inactive"> Account Info </NavLink>
                    <NavLink to={`/users/${id}/updates`} className="active"> Updates </NavLink>
                    <NavLink to={`/users/${id}/diets`} className="inactive"> My diets </NavLink>
                    {is_admin!="NONE" && <div className="line"></div>}
                    {is_admin!="NONE" &&<NavLink to={`/users/${id}/allusers`} className="inactive"> All users </NavLink>}
                    {is_admin!="NONE" &&<NavLink to={`/users/${id}/alldiets`} className="inactive"> All diets </NavLink>}
                    {/* {is_admin!="NONE" &&<NavLink to={`/users/${id}/allbillings`} className="inactive"> All billings </NavLink>} */}
                    <div className="line"></div>
                </div>
                <div className="logout">
                    <NavLink to={`/logout`} className="inactive"> Log out </NavLink>
                </div>
            </div>

            <div className="two" id="weight-and-happiness">
                <div>
                    <h2>Updates</h2>
                    <p id="info">*Please, send constant updates, so you can keep track of your progress</p>
                    <form onSubmit={handleSubmit}>
                        <p>Weight:</p>
                        <input placeholder="kg" type="number" min={30} max={400} id="weight"/>
                        <div className="userButton">
                            <button type="submit" className="loginButton">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserWeightHappinessComponent;
import React from 'react';
import { useParams } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import { Slider } from '@mui/material';
// import moment from 'moment';
import { useNavigate } from 'react-router';
import '../styles/User.css';
import HappinessService from '../services/HappinessService';
import WeightService from '../services/WeightService';

function UserWeightHappinessComponent(props) {

    let { id } = useParams(); 

    const [happiness, setHappiness] = React.useState('');
    const navigate = useNavigate();
    
    // React.useEffect(() => { 
    //     UserService.getUserById(id).then((response) => {
    //         setUser(response.data);
    //     })
    // }, '');

    function handleHappiness(e) {
        setHappiness(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const { weight } = e.target.elements;
        // const date = new Date();
        // const date_now = moment(date.toLocaleDateString(), 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
    
        const happinessObj = {
            happiness_level: happiness,
            userDto: {
                id: Number(id)
            } 
        }

        const weightObj = {
            weight_number: Number(weight.value),
            userDto: {
                id: Number(id)
            } 
        }
        
        let ok = false;
        if(happiness !=='') {
            ok = true;
            HappinessService.setHappiness(happinessObj)
                .then( (response) => { console.log('E bine pe happiness'); })
                .catch( (error) => { alert(error); }); //"An error occured! Please try again later!"
        }

        if(Number(weight.value) < 400 && Number(weight.value) >= 30){
            ok = true;
            WeightService.setWeight(weightObj)
                .then( (response) => { console.log('E bine pe weight');  })
                .catch( (error) => { alert("An error occured! Please try again later!"); console.log(error); });
        }

        console.log(ok);
        if(ok === true) {
            // setTimeout(navigate(`/users/${id}`), 1000); 
            // wait so that 
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

                        {/* <Slider
                            size="small"
                            defaultValue={70}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            /> */}
                        <p>Happiness level:</p>
                        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" onChange={handleHappiness}/>
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
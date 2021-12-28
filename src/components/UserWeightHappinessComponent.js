import React from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../services/UserService';
import {NavLink} from 'react-router-dom';
import { Slider } from '@mui/material';

import '../styles/User.css';

function UserWeightHappinessComponent(props) {

    let { id } = useParams(); 

    const [user, setUser] = React.useState('');
    
    React.useEffect(() => { 
        UserService.getUserById(id).then((response) => {
            setUser(response.data);
        })
    }, '');

    function handleChange (e) {
        console.log(e.target.value);


    }

    return (
        <div className="all, all_same">
            <div className="one">
                <div className="nav">
                    <NavLink to={`/users/${id}`} className="inactive"> Account Info </NavLink>
                    <NavLink to={`/users/${id}/updates`} className="active"> Updates </NavLink>
                    <NavLink to={`/users/${id}/diets`} className="inactive"> My diets </NavLink>
                </div>
            </div>

            <div className="all_same, two">
                <div>
                    <h2>Updates</h2>
                    <p id="info">*Please, send constant updates, so you can keep track of your progress</p>
                    <form onSubmit={handleChange}>
                        <p>Weight</p>
                        <input placeholder="kg" type="number" min={30} max={400}></input>

                        {/* <Slider
                            size="small"
                            defaultValue={70}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            /> */}
                        <p>Happiness level</p>
                        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto"/>
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
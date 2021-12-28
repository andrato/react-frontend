import React from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../services/UserService';
import {NavLink} from 'react-router-dom';
import { Slider } from '@mui/material';

import '../styles/User.css';
import { ContentCutOutlined } from '@mui/icons-material';

function UserComponent(props) {

    let { id } = useParams(); 

    const [user, setUser] = React.useState('');
    
    React.useEffect(() => { 
        UserService.getUserById(id).then((response) => {
            setUser(response.data);
        })
    }, '');

    // if(user.gender === "F") {
    //     user.gender = "Female";
    // } else {
    //     user.gender = "Male";
    // }

    function handleChange (e) {
        console.log(e.target.value);


    }

    return (
        <div className="all, all_same">
            <div className="one">
                <div className="nav">
                    <NavLink to={`/users/${id}`} className="active"> Account Info </NavLink>
                    <NavLink to={`/users/${id}/updates`} className="inactive"> Updates </NavLink>
                    <NavLink to={`/users/${id}/diets`} className="inactive"> My diets </NavLink>
                </div>
            </div>

            <div className="all_same, two">
                {
                    <div>
                        <h2> Basic Info </h2>
                        <pre >First Name: <span> {user.first_name} </span>  </pre>
                        <pre >Last Name: <span> {user.last_name} </span>  </pre>
                        <pre >Username:  <span> {user.username} </span>  </pre>
                        <pre >Gender:       <span> {user.gender} </span>  </pre>
                        {/* <pre >City:       <span> {user.city} </span>  </pre>
                        <pre >Country:       <span> {user.country} </span>  </pre> */}
                    </div>
                }
                <div className="userButton">
                    <button className="loginButton">UPDATE</button>
                </div>
            </div>
        </div>
    )
}

export default UserComponent;
import React from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../services/UserService';
import {NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router';

import '../styles/User.css';
import Diet from '../pages/Diet';

function UserFormComponent(props) {

    let { id } = useParams(); 

    const [user, setUser] = React.useState('');
    const navigate = useNavigate();
    
    React.useEffect(() => { 
        UserService.getUserById(id).then((response) => {
            setUser(response.data);
            console.log(user);
        })
        //console.log("called " + id);
    }, '');

    console.log(user);
    return (
        <div className="all">
            <div className="one">
                <div className="nav">
                    <NavLink to={`/users/${id}`} className="inactive"> Account Info </NavLink>
                    <NavLink to={`/users/${id}/updates`} className="inactive"> Updates </NavLink>
                    <NavLink to={`/users/${id}/diets`} className="inactive"> My diets </NavLink>
                </div>
                <div className="logout">
                    <NavLink to={`/`} className="inactive"> Log out </NavLink>
                </div>
            </div>
                
            <div id="altceva">
                <form>
                    {
                        <input placeholder={user.username}/>
                    }
                </form>
            </div>
        </div>
    )
}

export default UserFormComponent;
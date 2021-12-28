import React from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../services/UserService';
import {NavLink} from 'react-router-dom';

import '../styles/User.css';

function UserDietsComponent(props) {

    let { id } = useParams(); 

    const [diets, setDiets] = React.useState([]);
    
    // React.useEffect(() => { 
    //     UserService.getUserById(id).then((response) => {
    //         setDiets(response.data);
    //         console.log(user);
    //     })
    //     //console.log("called " + id);
    // }, []);

    return (
        <div className="all">
            <div className="one">
                <div className="nav">
                    <NavLink to={`/users/${id}`} className="inactive"> Account Info </NavLink>
                    <NavLink to={`/users/${id}/updates`} className="inactive"> Updates </NavLink>
                    <NavLink to={`/users/${id}/diets`} className="active"> My diets </NavLink>
                </div>
                <div className="logout">
                    <NavLink to={`/`} className="inactive"> Log out </NavLink>
                </div>
            </div>

            <div>

            </div>
        </div>
    )
}

export default UserDietsComponent;
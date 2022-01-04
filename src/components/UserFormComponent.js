import React from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../services/UserService';
import {NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router';
import LocationService from '../services/LocationService';
import '../styles/User.css';

function UserFormComponent(props) {

    let { id } = useParams(); 

    const [user, setUser] = React.useState('');
    const [cities, setCities] = React.useState([]);    
    const navigate = useNavigate();
    
    React.useEffect(() => { 
        UserService.getUserById(id).then((response) => {
            setUser(response.data);
            console.log(user);
        })
    }, '');

    React.useEffect(() => { 
        LocationService.getCities().then((response) => {
            setCities(response.data);
        })
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        const {last_name, username, city} = e.target.elements;

        const userInfo = { "last_name": last_name.value
                         , "username": username.value
                         , "city": Number(city.value)};

        console.log("este pe submit in update");
        console.log(userInfo);

        UserService.update(id, userInfo)
        .then( (response) => { alert("a mers"); navigate(`/users/${id}`); /*navigate('/login');*/})
        .catch( (error) => { alert(error) }); //"Could not register! Please try again!",

    }

    return (
        <div className="all">
            <div className="one">
                <div className="nav">
                    <NavLink to={`/users/${id}`} className="inactive"> Account Info </NavLink>
                    <NavLink to={`/users/${id}/updates`} className="inactive"> Updates </NavLink>
                    <NavLink to={`/users/${id}/diets`} className="inactive"> My diets </NavLink>
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
                                <label>Username: </label>
                                <input className="update" id="username" placeholder={user.username}/>
                            </div>
                            <div>
                                <label>Last name: </label>
                                <input className="update" id="last_name" placeholder={user.last_name}/>
                            </div>
                            <div className="div-inline">
                                <label>City: </label>
                                <select name="city" id="city" className="update" >
                                { 
                                    cities.map(
                                        (city, key) => {
                                            return <option value={`${city.id}`}> {city.name}</option>
                                        }
                                    )
                                }
                                </select>
                            </div>
                        </div>
                    }
                    <button id="butonUpdate" type="submit" className="loginButton">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default UserFormComponent;
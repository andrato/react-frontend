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
    const is_admin = localStorage.getItem("is_admin");

    
    React.useEffect(() => { 
        UserService.getUserById(id).then((response) => {
            setUser(response.data);
        })
    }, [id]);

    React.useEffect(() => { 
        LocationService.getCities().then((response) => {
            setCities(response.data);
        })
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        const {last_name, first_name, city, target} = e.target.elements;

        if(last_name.value) {
            user.last_name = last_name.value;
        }
        if(first_name.value){
            user.first_name = first_name.value;
        }
        if(city.value){
            user.cityId = city.value;
        }
        if(target.value){
            user.target = target.value;
        }

        const userInfo = { "id": user.id
                         , "first_name": user.first_name
                         , "last_name": user.last_name
                         , "username": user.username
                         , "cityId": user.cityId 
                         , "birth_date": user.birth_date
                         , "gender": user.gender 
                         , "target": user.target};

        console.log("este pe submit in update");
        console.log(userInfo);

        UserService.update(id, userInfo)
        .then( (response) => { navigate(`/users/${id}`); /*navigate('/login');*/})
        .catch( (error) => { alert(error) }); //"Could not register! Please try again!",
    }

    return (
        <div className="all">
            <div className="one">
                <div className="nav">
                    <NavLink to={`/users/${id}`} className="inactive"> Account Info </NavLink>
                    <NavLink to={`/users/${id}/updates`} className="inactive"> Updates </NavLink>
                    <NavLink to={`/users/${id}/diets`} className="inactive"> My diets </NavLink>
                    <div className="line"></div>
                    {is_admin &&<NavLink to={`/users/${id}/allusers`} className="inactive"> All users </NavLink>}
                    {is_admin &&<NavLink to={`/users/${id}/alldiets`} className="inactive"> All diets </NavLink>}
                    {is_admin &&<NavLink to={`/users/${id}/allbillings`} className="inactive"> All billings </NavLink>}
                    <div className="line"></div>
                    {is_admin &&<NavLink to={`/users/${id}/facttables`} className="inactive"> Fact Tables </NavLink>}
                    {is_admin &&<NavLink to={`/users/${id}/reports`} className="inactive"> Reports </NavLink>}
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
                                <label>First name: </label>
                                <input className="update" id="first_name" placeholder={user.first_name}/>
                            </div>
                            <div>
                                <label>Last name: </label>
                                <input className="update" id="last_name" placeholder={user.last_name}/>
                            </div>
                            <div>
                                <label>Target: </label>
                                <input className="update" id="target" placeholder={user.target}/>
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
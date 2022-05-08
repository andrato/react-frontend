import React from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../services/UserService';
import {NavLink} from 'react-router-dom';
import '../styles/User.css';
import HappinessService from '../services/HappinessService';
import WeightService from '../services/WeightService';
import { useNavigate } from 'react-router';

function UserComponent(props) {

    let { id } = useParams(); 

    const [user, setUser] = React.useState('');
    const [weight, setWeight] = React.useState([]);
    const [happiness, setHappiness] = React.useState([]);
    const navigate = useNavigate();
    const is_admin = localStorage.getItem("is_admin");


    React.useEffect(() => { 
        UserService.getUserById(id).then((response) => {
            setUser(response.data);
        })
    }, [id]);

    React.useEffect(() => { 
        WeightService.getWeight(id).then((response) => {
            setWeight(response.data);
            console.log(response);
        })
    }, [id]);

    React.useEffect(() => { 
        HappinessService.getHappiness(id).then((response) => {
            setHappiness(response.data);
            console.log(response.data);
        })
    }, [id]);

    function handleUpdate() {
        navigate(`/users/${id}/form`);
    }

    return (
        <div className="all">
            <div className="one">
                <div className="nav">
                    <NavLink to={`/users/${id}`} className="active"> Account Info </NavLink>
                    <NavLink to={`/users/${id}/updates`} className="inactive"> Updates </NavLink>
                    <NavLink to={`/users/${id}/diets`} className="inactive"> My diets </NavLink>
                    {is_admin!="false" && <div className="line"></div>}
                    {is_admin!="false" &&<NavLink to={`/users/${id}/allusers`} className="inactive"> All users </NavLink>}
                    {is_admin!="false" &&<NavLink to={`/users/${id}/alldiets`} className="inactive"> All diets </NavLink>}
                    {is_admin!="false" &&<NavLink to={`/users/${id}/allbillings`} className="inactive"> All billings </NavLink>}
                    <div className="line"></div>
                </div>
                <div className="logout">
                    <NavLink to={`/logout`} className="inactive"> Log out </NavLink>
                </div>
            </div>

            <div className="two" id="user-component">
                {
                    <div>
                        <h2> Basic Info </h2>
                        <pre >First Name: <span> {user.first_name} </span>  </pre>
                        <pre >Last Name: <span> {user.last_name} </span>  </pre>
                        <pre >Username:  <span> {user.username} </span>  </pre>
                        <pre >Gender:       <span> {user.gender} </span>  </pre>
                        <pre >Target:       <span> {user.target} </span>  </pre>
                        {/* <pre >City:       <span> {user.city} </span>  </pre>
                        <pre >Country:       <span> {user.country} </span>  </pre> */}
                    </div>
                }
                <div>

                </div>
                <div className="userButton">
                    <button className="loginButton" onClick={handleUpdate}>UPDATE</button>
                </div>

                <div className="modifica">
                    <h2>Weight History</h2>
                    <table>
                        <tr>
                            <th>Kg</th>
                            <th>Date</th>
                        </tr>
                        {
                            weight.map(
                                (ceva, key) => {
                                    return (
                                        <tr>
                                            <td>{ceva.value}</td>
                                            <td>{ceva.date}</td>
                                        </tr>
                                    )
                                })
                        }
                    </table>
                    
                </div>

                <div className="modifica" id="happiness">
                    <h2>Happiness History</h2>
                    <table>
                        <tr>
                            <th>Happiness level</th>
                            <th>Date</th>
                        </tr>
                        {
                            happiness.map(
                                (happy, key) => {
                                    return (
                                        <tr>
                                            <td>{happy.value}</td>
                                            <td>{happy.date}</td>
                                        </tr>
                                    )
                                })
                        }
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserComponent;
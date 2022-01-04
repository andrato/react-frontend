import React from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../services/UserService';
import {NavLink} from 'react-router-dom';
import PaymentService from '../services/PaymentService';
import DietItem from './DietItem';
import '../styles/User.css';
import DietService from '../services/DietService';

function UserDietsComponent(props) {

    let { id } = useParams(); 
    const [diets, setDiets] = React.useState([]);
    const user_token = localStorage.getItem("user_token");
    const user_id = localStorage.getItem("user_id");
    
    // React.useEffect(() => { 
    //     UserService.getUserById(id).then((response) => {
    //         setDiets(response.data);
    //         console.log(user);
    //     })
    //     //console.log("called " + id);
    // }, []);

    React.useEffect(() => { 
        // ToDo: replace 1 with the current logged in user, if it exists, if not, then empty
        if(user_token) {
            PaymentService.getDiets(user_id).then((response) => {
                setDiets(response.data);
            })
            .catch((error) => {console.log(error)});
        }            
    }, []);

    return (
        <div className="all">
            <div className="one">
                <div className="nav">
                    <NavLink to={`/users/${id}`} className="inactive"> Account Info </NavLink>
                    <NavLink to={`/users/${id}/updates`} className="inactive"> Updates </NavLink>
                    <NavLink to={`/users/${id}/diets`} className="active"> My diets </NavLink>
                </div>
                <div className="logout">
                    <NavLink to={`/logout`} className="inactive"> Log out </NavLink>
                </div>
            </div>
            <div class="twotwo">
                <div className="menu">
                    <div className="menuList">
                        {
                            diets.map(
                                (diet, key) => {
                                    return <DietItem id={diet.dietId} image={diet.image} name={diet.dietName} price={diet.amount}/>
                                }
                            )
                        }
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default UserDietsComponent;
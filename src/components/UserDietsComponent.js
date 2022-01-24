import React from 'react';
import { useParams } from 'react-router-dom';
// import UserService from '../services/UserService';
import {NavLink} from 'react-router-dom';
import PaymentService from '../services/PaymentService';
import DietItem from './DietItem';
import '../styles/User.css';
// import DietService from '../services/DietService';

function UserDietsComponent(props) {

    let { id } = useParams(); 
    const [diets, setDiets] = React.useState([]);
    // const user_token = localStorage.getItem("user_token");
    const user_id = localStorage.getItem("user_id");
    const is_admin = localStorage.getItem("is_admin");

    
    // React.useEffect(() => { 
    //     UserService.getUserById(id).then((response) => {
    //         setDiets(response.data);
    //         console.log(user);
    //     })
    // }, []);

    React.useEffect(() => { 
        if(user_id) {
            PaymentService.getDiets(user_id).then((response) => {
                console.log(response.data);
                setDiets(response.data);
            })
            .catch((error) => {console.log(error)});
        }            
    }, [user_id]);

    return (
        <div className="all">
            <div className="one">
                <div className="nav">
                    <NavLink to={`/users/${id}`} className="inactive"> Account Info </NavLink>
                    <NavLink to={`/users/${id}/updates`} className="inactive"> Updates </NavLink>
                    <NavLink to={`/users/${id}/diets`} className="active"> My diets </NavLink>
                    {is_admin &&<NavLink to={`/users/${id}/allusers`} className="inactive"> All users </NavLink>}
                    {is_admin &&<NavLink to={`/users/${id}/alldiets`} className="inactive"> All diets </NavLink>}
                    {is_admin &&<NavLink to={`/users/${id}/allbillings`} className="inactive"> All billings </NavLink>}
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
                                    return <DietItem id={diet.dietDto.id} image={diet.dietDto.image} name={diet.dietDto.name} price={diet.dietDto.price}/>
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
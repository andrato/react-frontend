import React from 'react';
import { useParams } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import '../styles/User.css';
import { useNavigate } from 'react-router';
import DietService from '../services/DietService';

function ReportsComponent(props) {

    let { id } = useParams(); 
    const navigate = useNavigate();
    const is_admin = localStorage.getItem("is_admin");
    const [diets, setDiets] = React.useState([]);

    React.useEffect(() => { 
        DietService.getDiets().then((response) => {
            console.log(response.data);
            setDiets(response.data)
        })
    }, []);

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
                    {is_admin &&<NavLink to={`/users/${id}/reports`} className="active"> Reports </NavLink>}
                    <div className="line"></div>
                </div>
                <div className="logout">
                    <NavLink to={`/logout`} className="inactive"> Log out </NavLink>
                </div>
            </div>

            <div className="two" id="user-component" style={{ marginRight: '20px' }}>
                
            </div>
        </div>
    )
}

export default ReportsComponent;
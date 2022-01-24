import React from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../services/UserService';
import {NavLink} from 'react-router-dom';
import '../styles/User.css';
import { useNavigate } from 'react-router';
import BillingService from '../services/BillingService';

function AllBillingsComponent(props) {

    let { id } = useParams(); 
    const navigate = useNavigate();
    const is_admin = localStorage.getItem("is_admin");
    const [billings, setBillings] = React.useState([]);

    React.useEffect(() => { 
        BillingService.getBillings().then((response) => {
            console.log(response.data);
            setBillings(response.data)
        })
    }, []);

    return (
        <div className="all">
            <div className="one">
                <div className="nav">
                    <NavLink to={`/users/${id}`} className="inactive"> Account Info </NavLink>
                    <NavLink to={`/users/${id}/updates`} className="inactive"> Updates </NavLink>
                    <NavLink to={`/users/${id}/diets`} className="inactive"> My diets </NavLink>
                    {is_admin &&<NavLink to={`/users/${id}/allusers`} className="inactive"> All users </NavLink>}
                    {is_admin &&<NavLink to={`/users/${id}/alldiets`} className="inactive"> All diets </NavLink>}
                    {is_admin &&<NavLink to={`/users/${id}/allbillings`} className="active"> All billings </NavLink>}
                </div>
                <div className="logout">
                    <NavLink to={`/logout`} className="inactive"> Log out </NavLink>
                </div>
            </div>

            <div className="two" id="user-component" style={{ marginRight: '20px' }}>
            <table>
                    <tr>
                        <th>ID</th>
                        <th>User Id</th>
                        <th>Username</th>
                        <th>Diet</th>
                        <th>Diet price</th>
                        <th>Date</th>
                    </tr>
                    {
                        billings.map(
                            (billing, key) => {
                                return (
                                    <tr>
                                        <td>{billing.id}</td>
                                        <td>{billing.userDto.id}</td>
                                        <td>{billing.userDto.username}</td>
                                        <td>{billing.dietDto.name}</td>
                                        <td>{billing.dietDto.price}</td>
                                        <td>{billing.paymentDto.date}</td>
                                    </tr>
                                )
                            }
                        )
                    }
                </table>
            </div>
        </div>
    )
}

export default AllBillingsComponent;
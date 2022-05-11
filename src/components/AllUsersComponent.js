import React from 'react';
import { useParams } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import '../styles/User.css';
import { useNavigate } from 'react-router';
import UserService from '../services/UserService';

function AllUsersComponent(props) {

    let { id } = useParams(); 
    const navigate = useNavigate();
    const is_admin = localStorage.getItem("is_admin");
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => { 
        UserService.getUsers().then((response) => {
            console.log("Sunt pe response: ");
            console.log(response);
            setUsers(response.data)
        }).catch ((err) => {
            alert(err);
        })
    }, [is_admin]);

    async function handleAdmin(userId) {
        await UserService.changeUserRights(userId).then((response) => {
            console.log(response.data);
            navigate(`/users/${id}/allusers/`);
        });
    }

    return (
        <div className="all">
            <div className="one">
                <div className="nav">
                    <NavLink to={`/users/${id}`} className="inactive"> Account Info </NavLink>
                    <NavLink to={`/users/${id}/updates`} className="inactive"> Updates </NavLink>
                    <NavLink to={`/users/${id}/diets`} className="inactive"> My diets </NavLink>
                    {is_admin!="NONE" && <div className="line"></div>}
                    {is_admin!="NONE" &&<NavLink to={`/users/${id}/allusers`} className="active"> All users </NavLink>}
                    {is_admin!="NONE" &&<NavLink to={`/users/${id}/alldiets`} className="inactive"> All diets </NavLink>}
                    {is_admin!="NONE" &&<NavLink to={`/users/${id}/allbillings`} className="inactive"> All billings </NavLink>}
                    <div className="line"></div>
                </div>
                <div className="logout">
                    <NavLink to={`/logout`} className="inactive"> Log out </NavLink>
                </div>
            </div>

            <div className="two" id="user-component" style={{ marginRight: '20px' }}>
            <table>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Taget</th>
                        <th>Birth date</th>
                        <th>Gender</th>
                        <th>Country</th>
                        <th>Admin</th>
                        <th>Change Admin</th>
                    </tr>
                    {
                        users.map(
                            (user, key) => {
                                return (
                                    <tr>
                                        <td>{user.id}</td>
                                        <td>{user.username}</td>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td>{user.target}</td>
                                        <td>{user.birth_date}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.countryId}</td>
                                        <td>{user.isAdmin}</td>
                                        <td><button onClick={() => handleAdmin(`${user.id}`)}>Change admin</button></td>
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

export default AllUsersComponent;
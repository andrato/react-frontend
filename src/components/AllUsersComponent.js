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

    function handleChange (userId, e) {
        // const newUser = {
        //     user_id: userId,
        //     admin: e.target.value
        // }
        
        const objIndex = users.findIndex((obj => obj.id == userId));
        users[objIndex].isAdmin = e.target.value;
    };

    async function handleAdmin(userId) {
        const objIndex = users.findIndex((obj => obj.id == userId));
        await UserService.changeUserRights(userId, users[objIndex].isAdmin).then((response) => {
            console.log(response.data);
            navigate(`/users/${id}/allusers/`);
        }).catch(err => {console.log("error: " + JSON.stringify(err))});
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
                    {/* {is_admin!="NONE" &&<NavLink to={`/users/${id}/allbillings`} className="inactive"> All billings </NavLink>} */}
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
                                        <td>
                                            <select onChange={(value) => handleChange(`${user.id}`, value)}>        
                                                <option value="NONE" selected={`${user.isAdmin}` == "NONE" ? true : false}>NONE</option>
                                                <option value="EA" selected={`${user.isAdmin}` == "EA" ? true : false}>EA</option>
                                                <option value="WE" selected={`${user.isAdmin}` == "WE" ? true : false}>WE</option>
                                                <option value="ALL" selected={`${user.isAdmin}` == "ALL" ? true : false}>ALL</option>
                                            </select>
                                        </td>
                                        <td><button type="submit" onClick={() => handleAdmin(`${user.id}`)}>Change admin</button></td>
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
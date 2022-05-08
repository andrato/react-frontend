import React from 'react';
import { useParams } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import '../styles/User.css';
import { useNavigate } from 'react-router';
import DietService from '../services/DietService';

function AllDietsComponent(props) {

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

    function handleUpdate(dietId) {
        console.log("pe update: id=", dietId);
        navigate(`/users/${id}/allDiets/${dietId}`);
    }

    async function handleRemove(id) {
        await DietService.deleteDiet(id).then((response) => {
            console.log(response.data);
            navigate(`/users/${id}/alldiets/`);
        });
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
                    {is_admin &&<NavLink to={`/users/${id}/alldiets`} className="active"> All diets </NavLink>}
                    {is_admin &&<NavLink to={`/users/${id}/allbillings`} className="inactive"> All billings </NavLink>}
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
                        <th>Name</th>
                        <th>Price</th>
                        <th>Max Calories</th>
                        <th>Goal</th>
                        <th>Type</th>
                        <th>Update</th>
                        {/* <th>Remove</th> */}
                    </tr>
                    {
                        diets.map(
                            (diet, key) => {
                                return (
                                    <tr>
                                        <td>{diet.id}</td>
                                        <td>{diet.name}</td>
                                        <td>{diet.price}</td>
                                        <td>{diet.maximumCalories}</td>
                                        <td>{diet.dietGoalId}</td>
                                        <td>{diet.dietTypeId}</td>
                                        <td><button onClick={() => handleUpdate(`${diet.id}`)}>Update</button></td>
                                        {/* <td><button onClick={() => handleRemove(`${diet.id}`)}>Remove</button></td> */}
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

export default AllDietsComponent;
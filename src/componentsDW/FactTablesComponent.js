import React from 'react';
import { useParams } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import '../styles/User.css';
import '../styles/DW.css';
import FactTablesService from '../servicesDW/FactTablesService';

function FactTablesComponent(props) {

    let { id } = useParams(); 
    const is_admin = localStorage.getItem("is_admin");
    const [billings, setBillings] = React.useState([]);
    const [dietPlan, setDietPlan] = React.useState([]);
    const [weightEvolution, setWeightEvolution] = React.useState([]);

    const[showBillings, setShowBillings] = React.useState(false);
    const[showPlan, setShowPlan] = React.useState(false);
    const[showEvolution, setShowEvolution] = React.useState(false);

    React.useEffect(() => { 
        FactTablesService.getBillings().then((response) => {
            setBillings(response.data)
        })
    }, []);

    React.useEffect(() => { 
        FactTablesService.getDietPlan().then((response) => {
            setDietPlan(response.data)
        })
    }, []);

    React.useEffect(() => { 
        FactTablesService.getWeightEvolution().then((response) => {
            setWeightEvolution(response.data)
        })
    }, []);

    function handleTables(value){
        switch(value){
            case 'billings':{
                setShowBillings(true);
                setShowEvolution(false);
                setShowPlan(false);
                break;
            }
            case 'dietPlan': {
                setShowBillings(false);
                setShowEvolution(false);
                setShowPlan(true);
                break;
            }
            case 'weightEvolution': {
                setShowBillings(false);
                setShowEvolution(true);
                setShowPlan(false);
                break;
            }
            default: {
                break;
            }
                
        }
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
                    {is_admin &&<NavLink to={`/users/${id}/facttables`} className="active"> Fact Tables </NavLink>}
                    {is_admin &&<NavLink to={`/users/${id}/reports`} className="inactive"> Reports </NavLink>}
                    <div className="line"></div>
                </div>
                <div className="logout">
                    <NavLink to={`/logout`} className="inactive"> Log out </NavLink>
                </div>
            </div>

            <div className="two" id="user-component" style={{ marginRight: '20px' }}>
                <button className="butonTabele" value="billings" onClick={() => handleTables('billings')}>Billings</button>
                <button className="intre" value="dietPlan" onClick={() => handleTables('dietPlan')}>Diet Plan</button>
                <button className="butonTabele" value="weightEvolution" onClick={() => handleTables('weightEvolution')}>Weight Evolution</button>

                {showBillings && <div className="tables">
                    <table>
                        <tr>
                            <th>User ID</th>
                            <th>Diet ID</th>
                            <th>Region ID</th>
                            <th>Time ID</th>
                            <th>Diet Price</th>
                            <th>Amount</th>
                        </tr>
                        {
                            billings.map(
                                (billing, key) => {
                                    return (
                                        <tr>
                                            <td>{billing.user_id}</td>
                                            <td>{billing.diet_id}</td>
                                            <td>{billing.region_id}</td>
                                            <td>{billing.time_id}</td>
                                            <td>{billing.diet_price}</td>
                                            <td>{billing.amount}</td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </table>
                </div>}   
                {showPlan && <div className="tables">
                    <table>
                        <tr>
                            <th>User ID</th>
                            <th>Diet ID</th>
                            <th>Food ID</th>
                            <th>Time ID</th>
                            <th>Calories</th>
                        </tr>
                        {
                            dietPlan.map(
                                (plan, key) => {
                                    return (
                                        <tr>
                                            <td>{plan.user_id}</td>
                                            <td>{plan.diet_id}</td>
                                            <td>{plan.food_id}</td>
                                            <td>{plan.time_id}</td>
                                            <td>{plan.calories}</td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </table>
                </div>}  

                {showEvolution && <div className="tables">
                    <table>
                        <tr>
                            <th>User ID</th>
                            <th>Diet ID</th>
                            <th>Time ID</th>
                            <th>Weight</th>
                        </tr>
                        {
                            weightEvolution.map(
                                (weight, key) => {
                                    return (
                                        <tr>
                                            <td>{weight.user_id}</td>
                                            <td>{weight.diet_id}</td>
                                            <td>{weight.time_id}</td>
                                            <td>{weight.weight}</td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </table>
                </div>}  
            </div>
        </div>
    )
}

export default FactTablesComponent;


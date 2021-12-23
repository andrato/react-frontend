// import { Navigation } from '@mui/icons-material';
import React from 'react';
import LocationService from '../services/LocationService';
// import UserService from '../services/UserService';
// import { useParams } from 'react-router-dom';
import '../styles/Login.css';
import RegisterService from '../services/RegisterService';

function RegisterComponent () {

    // const [countries, setCountries] = React.useState([]);
    const [cities, setCities] = React.useState([]);
    const [value, setValue]= React.useState(2);
    // const [date, onChange] = React.useState(new Date());

    // React.useEffect(() => { 
    //     LocationService.getCountries().then((response) => {
    //         setCountries(response.data)
    //     })
    // }, []);

    React.useEffect(() => { 
        LocationService.getCitiesByCountry(value).then((response) => {
            setCities(response.data);
        })
    }, []);

    const handleChange = (e) => { 
        setValue(e.target.val);
    }

    // const postData = async () => {
    //     await RegisterService.sendUserInfo()
    // }

    const postData = async (event) => {
        //console.log("aici");
        console.log(event);
        await RegisterService.sendUserInfo(event);
    }

    return (
        <div className="background">
            <div className="register">
                <div className="content">
                    <form onSubmit={postData}>
                        <h3>Register</h3>

                        <div className="register-info">
                            {/* <label>Email address</label> */}
                            <input type="first_name" key="first_name" placeholder="First name" />
                        </div>

                        <div className="register-info">
                            {/* <label>Email address</label> */}
                            <input type="last_name" key="last_name" placeholder="Last name" />
                        </div>

                        <div className="register-info">
                            {/* <label>Password</label> */}
                            <input type="email" key="email" placeholder="Email" />
                        </div>

                        <div className="register-info">
                            {/* <label>Password</label> */}
                            <input type="password" key="password" placeholder="Enter password" />
                        </div>

                        <div className="register-info-div"> 
                            <div className="div-inline">
                                <select name="gender" key="gender">
                                    <option value="female" placeholder="Gender" >Female</option>
                                    <option value="male" placeholder="Gender" >Male</option>
                                </select>
                            </div>

                            {/* <div className="div-inline">
                                <select value={value} onChange={handleChange}>
                                { 
                                    countries.map(
                                        (country, key) => {
                                            return <option value={`${country.id}`}> {country.name}</option>
                                        }
                                    )
                                }
                                </select>
                            </div> */}

                            <div className="div-inline">
                                <select value={value} name="city" key="city">
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

                        {/* <div className="info">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div> */}

                        <button type="submit" className="loginButton">SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterComponent;
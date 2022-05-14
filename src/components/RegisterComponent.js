import React from 'react';
import LocationService from '../services/LocationService';
import '../styles/Login.css';
import AuthService from '../services/auth/AuthService';
import Calendar from 'react-calendar';
import moment from 'moment';
import { useNavigate } from 'react-router';

function RegisterComponent () {
    const [countries, setCountries] = React.useState([]);
    const [date, setDate] = React.useState(new Date());
    const [showCalendar, setShowCalendar] = React.useState(false);
    const navigate = useNavigate();
  
    React.useEffect(() => { 
        LocationService.getCountries().then((response) => {
            setCountries(response.data);
        })
        .catch(error => {alert(error);})
    }, []);

    const handleChange = value => {
        setDate(value);
        setShowCalendar(false);
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log("la inceput");
        const { first_name, last_name, username, gender, country} = e.target.elements;

        console.log(country.value);
        const birth_date = moment(date.toLocaleDateString(), 'DD/MM/YYYY').format('YYYY-MM-DD');
        console.log(birth_date);

        const userInfo = { "first_name": first_name.value 
                         , "last_name": last_name.value
                         , "username": username.value
                         , "gender": (gender.value === 'female') ? 'F' : 'M'
                         , "country": Number(country.value)
                         , "birth_date": birth_date.toString()};

        console.log("inainte de auth " + JSON.stringify(userInfo));
        AuthService.register(userInfo)
            .then( (response) => { navigate('/login'); })
            .catch( (error) => { console.log(JSON.stringify(error)); alert("Error on register: " + error) }); 
    }

    return (
        <div className="background">
            <div className="register">
                <div className="content">
                    <form onSubmit={handleSubmit}>
                        <h3>Register</h3>

                        <div className="register-info">
                            {/* <label>Email address</label> */}
                            <input type="first_name" id="first_name" placeholder="First name"/>
                        </div>

                        <div className="register-info">
                            {/* <label>Email address</label> */}
                            <input type="last_name" id="last_name" placeholder="Last name"/>
                        </div>

                        <div className="register-info">
                            {/* <label>Password</label> */}
                            <input type="email" id="username" placeholder="Email"/>
                        </div>

                        <div className="register-info">
                            {/* <label>Password</label> */}
                            <input type="password" id="password" placeholder="Enter password"/>
                        </div>

                        <div className="register-info-div"> 
                            <div className="div-inline">
                                <select name="gender" id="gender"  >
                                    <option value="female" placeholder="Gender" >Female</option>
                                    <option value="male" placeholder="Gender" >Male</option>
                                </select>
                            </div>

                            <div className="div-inline">
                                <select name="country" id="country"  >
                                { 
                                    countries.map(
                                        (country, key) => {
                                            return <option value={`${country.id}`}> {country.name}</option>
                                        }
                                    )
                                }
                                </select>
                            </div>
                        </div>

                        <div className="calendar">
                            <input
                                value={date.toLocaleDateString()}
                                onFocus={() => setShowCalendar(true)}
                            />
                            <Calendar 
                                className={showCalendar ? "" : "hide"}
                                value={date}
                                onChange={handleChange}
                            />
                        </div>

                        <button type="submit" className="loginButton">SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterComponent;
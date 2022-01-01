import React from 'react';
import LocationService from '../services/LocationService';
import '../styles/Login.css';
import RegisterService from '../services/RegisterService';
import Calendar from 'react-calendar';
import moment from 'moment';
import { useNavigate } from 'react-router';
import { ContactsOutlined } from '@mui/icons-material';

function RegisterComponent () {
    const [cities, setCities] = React.useState([]);
    const [date, setDate] = React.useState(new Date());
    const [showCalendar, setShowCalendar] = React.useState(false);
    const navigate = useNavigate();
  
    React.useEffect(() => { 
        LocationService.getCities().then((response) => {
            setCities(response.data);
        })
    }, []);

    const handleRoute = (msg) => { 
        navigate('/response', msg);
    }

    const handleChange = value => {
        setDate(value);
        setShowCalendar(false);
    };

    function handleSubmit(e) {
        e.preventDefault();
        const { first_name, last_name, username, password, gender, city} = e.target.elements;

        const birth_date = moment(date.toLocaleDateString(), 'DD/MM/YYYY').format('YYYY-MM-DD');
        console.log(birth_date);

        const userInfo = { "first_name": first_name.value 
                         , "last_name": last_name.value
                         , "username": username.value
                         , "password": password.value 
                         , "gender": (gender.value == 'female') ? 'F' : 'M'
                         , "city": Number(city.value)
                         , "birth_date": birth_date.toString()};
        // console.log(userInfo);
        RegisterService.sendUserInfo(userInfo)
            .then( (response) => { alert("a mers"); /*navigate('/login');*/  /*navigate('/login');*/})
            .catch( (error) => { alert(error) }); //"Could not register! Please try again!",
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
                                <select name="city" id="city"  >
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
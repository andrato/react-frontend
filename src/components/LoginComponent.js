import { Navigation } from '@mui/icons-material';
import React from 'react';
// import UserService from '../services/UserService';
// import { useParams } from 'react-router-dom';
import '../styles/Login.css';

function LoginComponent () {
    // const navigate = useNavigate();
  
    // const handleRegister = () => { 
    //     navigate(`/register`);
    // }

    return (
        <div className="background">
            <div className="login">
                <div className="content">
                    <form>
                        <h3>Sign In</h3>

                        <div className="info">
                            {/* <label>Email address</label> */}
                            <input type="email" placeholder="Enter email" />
                        </div>

                        <div className="info">
                            {/* <label>Password</label> */}
                            <input type="password" placeholder="Enter password" />
                        </div>

                        {/* <div className="info">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div> */}

                        <button type="submit" className="loginButton">SUBMIT</button>
                        <p className="password"> Don't have an account?
                            <a href="/register"> Sign up!</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent;
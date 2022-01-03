import React from 'react';
import AuthService from '../services/auth/AuthService';
import { useNavigate } from "react-router-dom";
import '../styles/Login.css';

function LoginComponent () {
    const navigate = useNavigate();
    const user_token = AuthService.getCurrentUserToken();
    const user_id = AuthService.getCurrentUserId();


    React.useEffect(() => { 
        if(user_token) {
            navigate(`/users/${user_id}`);
        }
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        const { username, password } = e.target.elements;

        const userInfo = { username: username.value 
                         , password: password.value};

        // var data;
        try {
            console.log("Suntem pe login");
            const { data } = await AuthService.login(userInfo);
            // console.log(data);
            // AuthService.setCurrentUserToken(data);
            JSON.stringify(localStorage.setItem('user_token', data));
        }   
        catch(error) {
            alert("Error on login: " + error);
        }
        
        try{
            console.log("Suntem pe getInfo");
            const {data} = await AuthService.getUserByUsername(userInfo.username);
            console.log(data);
            // AuthService.setCurrentUserId(data);
            JSON.stringify(localStorage.setItem('user_id', data));
        }
        catch(error) {
            alert("Error on getUserByUsername: " + error);
        }
    }

    return (
        <div className="background">
            <div className="login">
                <div className="content">
                    <form onSubmit={handleSubmit}>
                        <h3>Sign In</h3>

                        <div className="info">
                            {/* <label>Email address</label> */}
                            <input id="username" type="email" placeholder="Enter email" />
                        </div>

                        <div className="info">
                            {/* <label>Password</label> */}
                            <input id="password" type="password" placeholder="Enter password" />
                        </div>

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
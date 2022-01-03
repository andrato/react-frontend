import { Navigation } from '@mui/icons-material';
import React from 'react';
import AuthService from '../services/auth/AuthService';
// import { useParams } from 'react-router-dom';
import '../styles/Login.css';

function LoginComponent () {
    // const navigate = useNavigate();
  
    // const handleRegister = () => { 
    //     navigate(`/register`);
    // }
    // const [token, setToken] = React.useState("");
    // const [id, setId] = React.useState("");

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
            localStorage.setItem('user_token', JSON.stringify(data));
        }   
        catch(error) {
            alert("Error on login: " + error);
        }
        
        try{
            console.log("Suntem pe getInfo");
            const {data} = await AuthService.getUserByUsername(userInfo.username);
            console.log(data);
            localStorage.setItem('user_id', JSON.stringify(data));
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
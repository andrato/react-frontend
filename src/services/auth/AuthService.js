import axios from "axios";
import authHeader from './AuthHeader';


const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(obj) {
    console.log("login(obj) - will remove previous user_token");
    localStorage.removeItem("user_token");
    console.log("login(obj) - " + localStorage.getItem("user_token"));
    return axios.post(`http://localhost:8080/auth/login`, obj);
  }

  getUserByUsername(username) {
    // const token2 = JSON.parse(localStorage.getItem('user_token'));
    // console.log("getUserByUsername - " + token2);
    // const access_token = { "Authorization":  token2 };
    // console.log(access_token);
    // console.log(authHeader());
    return axios.get(`http://localhost:8080/users/username?request=${username}`, { headers: authHeader()});
  }

  logout() {
    localStorage.removeItem("user_token");
    localStorage.removeItem("user_id");
  }

  register(userInfo){
    console.log(userInfo); 
    return axios.post('http://localhost:8080/registration/', userInfo, { headers: 
          // 'content-type': 'application/json',
          authHeader()
        });
  }

  getCurrentUserToken() {
    // return localStorage.getItem('user_token');
    return JSON.parse(localStorage.getItem('user_token'));
  }

  getCurrentUserId() {
    // return Number(localStorage.getItem('user_id'));
    return JSON.parse(localStorage.getItem('user_id'));
  }

  setCurrentUserToken(data) {
    // localStorage.setItem('user_token', data);
    JSON.stringify(localStorage.setItem('user_token', data));
  }

  setCurrentUserId(data) {
    // localStorage.setItem('user_id', data);
    JSON.stringify(localStorage.setItem('user_id', data));
  }

};



export default new AuthService();
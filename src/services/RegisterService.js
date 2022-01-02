import axios from "axios";

class RegisterService {
    sendUserInfo(userInfo){
        console.log(userInfo); 
        return axios.post('http://localhost:8080/registration/', userInfo, {
            headers: {
              'content-type': 'application/json'
            }});
    }
}

// export object of this class
export default new RegisterService();
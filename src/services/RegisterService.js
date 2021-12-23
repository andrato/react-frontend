import axios from 'axios';

class RegisterService {
    sendUserInfo(userInfo){
        return axios.post(`http://localhost:8080/user/register`, userInfo)
            .then( (response) => { console.log(response); })
            .catch( (error) => { console.loglog(error); })
    }
}

// export object of this class
export default new RegisterService();
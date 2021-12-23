import axios from 'axios';

class UserService {
    getUser(id){
        return axios.get(`http://localhost:8080/user/${id}`);
    }
}

// export object of this class
export default new UserService();
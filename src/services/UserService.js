import axios from 'axios';
import authHeader from './auth/AuthHeader';

class UserService {
    getUserById(id){
        return axios.get(`http://localhost:8080/users/${id}`);
    }

    login(obj) {
        return axios.post(`http://localhost:8080/auth/login`, obj);
    }

    update(id, obj){
        console.log(obj);
        return axios.put(`http://localhost:8080/users/${id}`, obj);
    }
}

// export object of this class
export default new UserService();
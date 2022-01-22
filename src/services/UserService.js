import axios from 'axios';
import authHeader from './auth/AuthHeader';

class UserService {
    getUserById(id){
        return axios.get(`http://localhost:8080/users/${id}`, { headers: authHeader() });
    }

    login(obj) {
        return axios.post(`http://localhost:8080/auth/login`, obj, { headers: authHeader() });
    }

    update(id, obj){
        return axios.put(`http://localhost:8080/users/${id}`, obj, { headers: authHeader() });
    }
}

// export object of this class
export default new UserService();
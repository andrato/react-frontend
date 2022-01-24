import axios from 'axios';
import authHeader from './auth/AuthHeader';

class UserService {
    getUsers() {
        return axios.get(`http://localhost:8080/users/`);
    }

    login(obj) {
        return axios.post(`http://localhost:8080/auth/login`, obj);
    }

    update(id, obj){
        console.log(obj);
        return axios.put(`http://localhost:8080/users/${id}`, obj);
    }

    getUserById(id){
        return axios.get(`http://localhost:8080/users/${id}`);
    }

    getUsers() {
        return axios.get(`http://localhost:8080/users/`);
    }

    deleteUser(id) {
        return axios.delete(`http://localhost:8080/users/${id}`);
    }

    changeUserRights(id) {
        return axios.put(`http://localhost:8080/users/changeAdmin?id=${id}`)
    }
}

// export object of this class
export default new UserService();
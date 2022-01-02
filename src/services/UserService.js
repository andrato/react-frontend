import axios from 'axios';

class UserService {
    getUserById(id){
        return axios.get(`http://localhost:8080/users/${id}`);
    }

    login() {
        return axios.get(`http://localhost:8080/login`);
    }

    update(id, obj){
        return axios.put(`http://localhost:8080/users/${id}`, obj);
    }
}

// export object of this class
export default new UserService();
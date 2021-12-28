import axios from 'axios';

class UserService {
    getUserById(id){
        return axios.get(`http://localhost:8080/users/${id}`);
    }

    login() {
        return axios.get(`http://localhost:8080/login`);
    }
}

// export object of this class
export default new UserService();
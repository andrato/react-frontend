import axios from 'axios';
import authHeader from './auth/AuthHeader';

class UserService {
    getUsers() {
        // get all users
        const is_admin = localStorage.getItem("is_admin");
        if(is_admin === 'ALL'){
            console.log("Aiciii");
            return axios.get('http://localhost:8080/users/all');
        }
        else if (is_admin === 'EA') {
            return axios.get('http://localhost:8080/users/ea');
        }
        else if (is_admin === 'WE') {
            return axios.get('http://localhost:8080/users/we');
        }
        else {
            alert ("You have no rights to access this resource!")
        }
    }

    login(obj) {
        return axios.post(`http://localhost:8080/auth/login`, obj);
    }

    update(id, obj){
        console.log(obj);
        return axios.put(`http://localhost:8080/users/u/${id}`, obj);
    }

    getUserById(id){
        console.log("sunt aici: " + id);
        return axios.get(`http://localhost:8080/users/u/${id}`);
    }

    // getUsers() {
    //     return axios.get(`http://localhost:8080/users/`);
    // }

    deleteUser(id) {
        return axios.delete(`http://localhost:8080/users/${id}`);
    }

    changeUserRights(id) {
        return axios.put(`http://localhost:8080/users/changeAdmin?id=${id}`)
    }
}

// export object of this class
export default new UserService();
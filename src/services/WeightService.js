import axios from 'axios';
import authHeader from './auth/AuthHeader';

class WeightService {
    getWeight(id){
        return axios.get(`http://localhost:8080/weights/user?id=${id}`);
    }

    setWeight(weight){
        return axios.post('http://localhost:8080/weights', weight);
    }
}

// export object of this class
export default new WeightService();
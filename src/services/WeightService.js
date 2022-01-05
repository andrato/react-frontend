import axios from 'axios';
import authHeader from './auth/AuthHeader';

class WeightService {
    getWeight(id){
        return axios.get(`http://157.245.24.31:8080/weights/user?id=${id}`, { headers: authHeader() });
    }

    setWeight(weight){
        return axios.post('http://157.245.24.31:8080/weights', weight, { headers: authHeader() });
    }
}

// export object of this class
export default new WeightService();
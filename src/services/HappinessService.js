import axios from 'axios';
import authHeader from './auth/AuthHeader';

class HappinessService {
    getHappiness(id){
        return axios.get(`http://localhost:8080/happiness/user?id=${id}`, { headers: authHeader() });
    }

    setHappiness(happiness){
        console.log(happiness);
        return axios.post('http://localhost:8080/happiness', happiness, { headers: authHeader() });
    }
}

// export object of this class
export default new HappinessService();
import axios from 'axios';

class HappinessService {
    getHappiness(id){
        return axios.get(`http://localhost:8080/happiness/user?id=${id}`);
    }

    setHappiness(happiness){
        console.log(happiness);
        return axios.post('http://localhost:8080/happiness', happiness);
    }
}

// export object of this class
export default new HappinessService();
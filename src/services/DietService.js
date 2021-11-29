import axios from 'axios';

const DIETS_REST_API_URL = 'http://localhost:8080/diets'

class DietService {
    getDiets(){
        return axios.get(DIETS_REST_API_URL);
    }
}

// export object of this class
export default new DietService();
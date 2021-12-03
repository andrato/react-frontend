import axios from 'axios';

const DIETS_REST_API_URL = 'http://localhost:8080/diets/'

class DietService {
    getDiets(){
        return axios.get(DIETS_REST_API_URL);
    }

    getDiet(id){
        return axios.get(`http://localhost:8080/diets/${id}`)
    }
}

// export object of this class
export default new DietService();
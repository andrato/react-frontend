import axios from 'axios';

const DIETS_REST_API_URL = 'http://localhost:8080/diets/'

class DietService {
    getDiets(){
        return axios.get('http://localhost:8080/diets/');
    }

    getDiet(id){
        return axios.get(`http://localhost:8080/diets/${id}`)
    }

    getDietsByType(id){
        return axios.get(`http://localhost:8080/diets/type?id=${id}`)
    }
}

// export object of this class
export default new DietService();
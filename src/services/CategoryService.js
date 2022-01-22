import axios from 'axios';

const DIETS_REST_API_URL = 'http://localhost:8080/categories'

class CategoryService {
    getCategories(){
        return axios.get(DIETS_REST_API_URL);
    }
}

// export object of this class
export default new CategoryService();
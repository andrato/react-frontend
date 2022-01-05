import axios from 'axios';
import authHeader from './auth/AuthHeader';

class FoodService {
    getFoodsByDiet(id){
        return axios.get(`http://157.245.24.31:8080/foods/diet?id=${id}`, { headers: authHeader() });
    }

    getIngredientsByFood(id) {
        return axios.get(`http://157.245.24.31:8080/ingredients/food?id=${id}`, { headers: authHeader() });
    }
}

// export object of this class
export default new FoodService();
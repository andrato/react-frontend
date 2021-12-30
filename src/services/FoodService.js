import axios from 'axios';

class FoodService {
    getFoodsByDiet(id){
        return axios.get(`http://localhost:8080/foods/diet?id=${id}`)
    }
}

// export object of this class
export default new FoodService();
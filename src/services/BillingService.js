import axios from 'axios';

class BillingService {
    buyDiet(obj){
        console.log(obj);
        return axios.post('http://localhost:8080/billings', obj);
    }
}

// export object of this class
export default new BillingService();
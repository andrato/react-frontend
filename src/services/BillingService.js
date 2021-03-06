import axios from 'axios';

class BillingService {
    buyDiet(obj){
        return axios.post('http://localhost:8080/billings', obj);
    }

    getDiets(id){
        console.log(id);
        return axios.post(`http://localhost:8080/billings/user?id=${id}`);
    }

    getBillings(){
        return axios.get(`http://localhost:8080/billings/`);
    }
}

// export object of this class
export default new BillingService();
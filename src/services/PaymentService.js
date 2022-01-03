import axios from 'axios';
import authHeader from './auth/AuthHeader';

class PaymentService {
    addPayment(obj){
        console.log(obj);
        return axios.post('http://localhost:8080/payments/', obj, { headers: authHeader() });
    }

    /* the payments details which contain the diets bought by a specific user */
    getDiets(id){
        return axios.get(`http://localhost:8080/payments/user?id=${id}`, { headers: authHeader() });
    }
}

// export object of this class
export default new PaymentService();
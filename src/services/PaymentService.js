import axios from 'axios';

class PaymentService {
    addPayment(obj){
        console.log(obj);
        return axios.post('http://localhost:8080/payments/', obj);
    }

    /* the payments details which contain the diets bought by a specific user */
    getDiets(id){
        id=13;
        return axios.get(`localhost:8080/payments/user?id=${id}`);
    }
}

// export object of this class
export default new PaymentService();
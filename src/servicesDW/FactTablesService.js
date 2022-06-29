import axios from 'axios';

class FactTablesService {
    getBillings(){
        return axios.get('http://localhost:8085/billings/');
    }

    getDietPlan(){
        console.log();
        return axios.get(`http://localhost:8085/dietPlan/`);
    }

    getWeightEvolution(){
        return axios.get(`http://localhost:8085/weightEvolution/`);
    }
}

// export object of this class
export default new FactTablesService();
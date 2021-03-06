import axios from 'axios';

class ReportService {
    salesPerDay(){
        return axios.get('http://localhost:8085/reports/salesPerDay/');
    }

    topCities(){
        return axios.get(`http://localhost:8085/reports/top3citiesPerYear/`);
    }

    topCitiesTotal(){
        return axios.get(`http://localhost:8085/reports/top3citiesPerYear/total`);
    }

    weightEvolution(id){
        return axios.get(`http://localhost:8085/reports/weightEvolution/1`);
    }

    soldDiets(){
        return axios.get('http://localhost:8085/reports/mostSoldDiet/');
    }

    cart(){
        return axios.get('http://localhost:8085/reports/percentPerYear');
    }
}

// export object of this class
export default new ReportService();
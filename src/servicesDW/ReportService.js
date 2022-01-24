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
        return axios.get(`http://localhost:8085/reports/weightEvolution/${id}`);
    }
}

// export object of this class
export default new ReportService();
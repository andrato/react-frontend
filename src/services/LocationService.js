import axios from 'axios';

class LocationService {
    getCountries(){
        return axios.get('http://localhost:8080/countries');
    }

    getCitiesByCountry(id){
        return axios.get(`http://localhost:8080/cities/country?id=${id}`);
    }
}

// export object of this class
export default new LocationService();
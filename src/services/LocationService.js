import axios from 'axios';

class LocationService {
    getCountries(){
        return axios.get('http://157.245.24.31:8080/countries');
    }

    getCitiesByCountry(id){
        return axios.get(`http://157.245.24.31:8080/cities/country?id=${id}`);
    }

    getCities(){
        return axios.get(`http://157.245.24.31:8080/cities`);
    }
}

// export object of this class
export default new LocationService();
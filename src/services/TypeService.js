import axios from 'axios';

class TypeService {
    getTypes(){
        return axios.get('http://localhost:8080/dietTypes');
    }
}

// export object of this class
export default new TypeService();
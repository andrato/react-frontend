import axios from 'axios';

class TypeService {
    getTypes(){
        return axios.get('http://157.245.24.31:8080/dietTypes');
    }
}

// export object of this class
export default new TypeService();
import axios from 'axios';
class DietService {
    getDiets(){
        return axios.get('http://localhost:8080/diets/');
    }

    getDiet(id){
        return axios.get(`http://localhost:8080/diets/${id}`)
    }

    getDietsByType(id){
        return axios.get(`http://localhost:8080/diets/type?id=${id}`)
    }

    deleteDiet(id){
        return axios.delete(`http://localhost:8080/diets/${id}`)
    }

    updateDiet(id, obj){
        return axios.put(`http://localhost:8080/diets/${id}`, obj)
    }
}

// export object of this class
export default new DietService();
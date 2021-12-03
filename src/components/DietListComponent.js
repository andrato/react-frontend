import React from 'react';
import axios from 'axios';
import DietService from '../services/DietService'
import DietItem from './DietItem';
import "../styles/DietList.css";

const DietListComponent = (props) => {

    const [diets, setDiets] = React.useState([]);

    // to call a rest api get the data 
    const getData = () => {
        axios.get('http://localhost:8080/diets').then(res => {
          console.table(res.data)
        })
    }

    React.useEffect(() => { 
        DietService.getDiets().then((response) => {
            setDiets(response.data)
        })
    }, []);

    // display diet list
    return (
        <div className="menu">
            <div className="menuList">
                {
                    diets.map(
                        (diet, key) => {
                            return <DietItem id={diet.id} image={diet.image} name={diet.name} price={diet.price}/>
                        }
                    )
                }
            </div>
        </div>
    )
}

export default DietListComponent;
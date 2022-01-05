import React from 'react';
import DietService from '../services/DietService'
import DietItem from './DietItem';
import "../styles/DietList.css";

const DietListComponent = (props) => {

    const [diets, setDiets] = React.useState([]);

    React.useEffect(() => { 
        DietService.getDiets().then((response) => {
            console.log(response.data);
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
                            return <DietItem key={diet.key} id={diet.id} image={diet.image} name={diet.name} price={diet.price}/>
                        }
                    )
                }
            </div>
        </div>
    )
}

export default DietListComponent;
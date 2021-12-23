import React from 'react'
import { useParams } from 'react-router-dom';
import DietService from '../services/DietService';
import DietItem from './DietItem';

export default function DietListTypeComponent(props) {

    const [diets, setDiets] = React.useState([]);

    let { id } = useParams(); 
    
    React.useEffect(() => { 
        DietService.getDietsByType(id).then((response) => {
            setDiets(response.data)
        })
        //console.log("called " + id);
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

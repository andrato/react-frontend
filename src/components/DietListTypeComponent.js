import React from 'react'
import { useParams } from 'react-router-dom';
import DietService from '../services/DietService';
import DietItem from './DietItem';

export default function DietListTypeComponent(props) {

    const [diets, setDiets] = React.useState([]);
    // const [category, setCategory] = React.useState(1);

    let { id } = useParams(); 

    React.useEffect(() => { 
        DietService.getDietsByType(id).then((response) => {
            console.log(response.data);
            setDiets(response.data);
        })
        // setCategory(id);
        console.log("called " + id);
    }, [id]);

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

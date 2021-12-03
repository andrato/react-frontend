import { Navigation } from '@mui/icons-material'
import React from 'react'
import DietService from '../services/DietService'
//import {Text} from 'react'
import { useParams } from 'react-router-dom';
import DietItem from './DietItem';

function DietComponent (props){

    // get id from url 
    let { id } = useParams(); 

    const [diet, setDiet] = React.useState('');

    React.useEffect(() => { 
        DietService.getDiet(id).then((response) => {
            setDiet(response.data);
            console.log(response.data);
        })
    },'');

    return (
        <div className="menu">
            <div className="menuList">
                {
                    <DietItem id={diet.id} image={diet.image} name={diet.name} price={diet.price}/>
                }   
            </div>
        </div>
    )
}

export default DietComponent;
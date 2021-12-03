import { Navigation } from '@mui/icons-material'
import React from 'react'
import DietService from '../services/DietService'
import {Text} from 'react'
import { useParams } from 'react-router-dom';

function DietComponent (props){

    let { id } = useParams(); 

    // display diet list
    console.log(props);
    return (
        <div >
            <p> {id} </p>
        </div>
    )
    
}

export default DietComponent;
import React from 'react';
import { useNavigate } from "react-router-dom";

class DietItem extends React.Component {

    render () {
        console.log(this.props);
        return (
            <div className="menuItem" onClick={ () => this.props.navigation.navigate('/diet', {dietId: this.props.id}) } >
                <div style={{ backgroundImage: `url(${this.props.image})` }}></div>
                <h2 style={{ paddingLeft: 17 + 'px'}}> {this.props.name} </h2>
                <p> {this.props.price}LEI </p>
            </div>
        )
    }
}

export default DietItem;
import React from 'react';
import DietService from '../services/DietService'

class DietComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            diets:[]
        }
    }

    // to call a rest api
    // get the data for the users
    componentDidMount() {
        DietService.getDiets().then((response) => {
            this.setState({ diets: response.data })
        })
    }

    // display list app users on a page
    render () {
        return (
            <div>
              <h1 className="text-center"> Diets list </h1> 
              <table className="table table-striped">
                  <thead>
                      <tr>
                          <td> Diet ID </td>
                          <td> Diet Name </td>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          this.state.diets.map(
                              diet => 
                              <tr key = {diet.id}>
                                  <td> {diet.id} </td>
                                  <td> {diet.name} </td>
                              </tr>
                          )
                      }
                  </tbody>
              </table>  
            </div>
        )
    }
}

export default DietComponent;
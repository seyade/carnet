import React, { Component } from 'react';
import axios from 'axios';
import Card from '../CarnetCard/CarnetCard';

class CarnetCardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carnets: []
    };
  }

  componentDidMount() {
    this.getAllCarnets();
  }

  getAllCarnets() {
    return axios.get('http://localhost:3009/api/carnets')
      .then(response => {
        const carnets = response.data;
        this.setState({ carnets });
      });
  }

  render() {
    return (
      <article className="carnet-card-container row pull-right">
        <h2 className="card-container-title">Card Container</h2>
        {
          this.state.carnets.map((carnet, index) => {
            return <Card carnet={carnet} key={index}/>
          })
        }
      </article>
    );
  }
}

export default CarnetCardContainer;

import React, { Component } from 'react';
import CarnetSidebar from './components/CarnetSidebar/CarnetSidebar';
import CarnetCardContainer from './components/CarnetCardContainer/CarnetCardContainer';
import './CarnetApp.css';

class CarnetApp extends Component {
  render() {
    return (
      <div className="carnet-app">
        <main className="app-content">
          <CarnetSidebar />
          <CarnetCardContainer />
        </main>
      </div>
    );
  }
}

export default CarnetApp;

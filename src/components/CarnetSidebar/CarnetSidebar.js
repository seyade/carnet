import React, { Component } from 'react';
import CarnetSidebarUser from '../CarnetSidebarUser/CarnetSidebarUser';
import CarnetSidebarForm from '../CarnetSidebarForm/CarnetSidebarForm';

class CarnetSidebar extends Component {
  render() {
    return (
      <aside className="carnet-sidebar-panel pull-left">
        <CarnetSidebarForm />
        <CarnetSidebarUser />
      </aside>
    );
  }
}

export default CarnetSidebar;

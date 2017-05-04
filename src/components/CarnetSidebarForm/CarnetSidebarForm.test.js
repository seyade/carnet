import React from 'react';
import ReactDOM from 'react-dom';
import CarnetSidebarForm from '../CarnetSidebarForm/CarnetSidebarForm';

it('renders CarnetSidebarForm without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CarnetSidebarForm />, div);
});

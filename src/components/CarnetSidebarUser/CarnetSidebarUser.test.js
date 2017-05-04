import React from 'react';
import ReactDOM from 'react-dom';
import CarnetSidebarUser from './CarnetSidebarUser';

it('renders CarnetSidebarUser without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CarnetSidebarUser />, div);
});

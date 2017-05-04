import React from 'react';
import ReactDOM from 'react-dom';
import CarnetSidebar from '../CarnetSidebar/CarnetSidebar';

it('renders CarnetSidebar without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CarnetSidebar />, div);
});

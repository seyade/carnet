import React from 'react';
import ReactDOM from 'react-dom';
import CarnetApp from './CarnetApp';

it('renders Carnet without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CarnetApp />, div);
});

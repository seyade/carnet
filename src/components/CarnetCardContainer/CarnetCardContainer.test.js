import React from 'react';
import ReactDOM from 'react-dom';
import CarnetCardContainer from '../CarnetCardContainer/CarnetCardContainer';

it('renders CarnetCardContainer without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CarnetCardContainer />, div);
});

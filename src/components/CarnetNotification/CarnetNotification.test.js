import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CarnetNotification from '../CarnetNotification/CarnetNotification';

describe('CarnetNotification', () => {

  test('renders CarnetNotification as intended', () => {
    const component = renderer.create(<CarnetNotification />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

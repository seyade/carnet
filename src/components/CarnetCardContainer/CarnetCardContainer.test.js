import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CarnetCardContainer from '../CarnetCardContainer/CarnetCardContainer';

describe('CarnetCardContainer', () => {
  let cardcontainer;

  beforeEach(() => {
    cardcontainer = shallow(<CarnetCardContainer />);
  });

  it('renders CarnetCardContainer as intended', () => {
    const component = renderer.create(<CarnetCardContainer />);
    const json = component.toJSON();

    expect(json).toMatchSnapshot();
  });

  it('should display container title', () => {
    expect(cardcontainer.find('.card-container-title').text()).toEqual('Card Container');
  });
});

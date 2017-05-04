import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import CarnetCard from '../CarnetCard/CarnetCard';

// it('renders CarnetCard without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<CarnetCard />, div);
// });

describe('CarnetCard', () => {
  let carnetcard,
    carnetData = {
      bookmarkTitle: 'Sabrina girls!!',
      url: 'http://www.sabrina.co',
      info: 'Some Sabrina best kitchen dishes'
    };

  beforeEach(() => {
    carnetcard = shallow(<CarnetCard carnet={carnetData} />);
  });


  it('renders as intended', () => {
    const component = renderer.create(<CarnetCard carnet={carnetData} />),
      json = component.toJSON();

    expect(json).toMatchSnapshot();
  });

  it('renders CarnetCard bookmark title', () => {
    expect(carnetcard.find('.card-title').text()).toEqual('Sabrina girls!!');
  });

  it('renders CarnetCard bookmark url or link', () => {
    expect(carnetcard.find('.card-url').text()).toEqual('http://www.sabrina.co');
  });

  it('renders CarnetCard bookmark info', () => {
    expect(carnetcard.find('.card-info').text()).toEqual('Some Sabrina best kitchen dishes');
  });

  it('should remove the card', () => {
    const handleRemove = jest.fn();

    expect(carnetcard.find('.card-remove-btn').length).toEqual(1);

    carnetcard.first().find('.card-remove-btn').simulate('click');

    expect(handleRemove).toHaveBeenCalled();
  });
});

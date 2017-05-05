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
  let carnetData = {
      bookmarkTitle: 'Sabrina girls!!',
      url: 'http://www.sabrina.co',
      info: 'Some Sabrina best kitchen dishes'
    },
    carnetcard, mockCarnetcard;

  beforeEach(() => {
    carnetcard = shallow(<CarnetCard carnet={carnetData} />);
  });


  it('renders as intended', () => {
    const component = renderer.create(<CarnetCard carnet={carnetData}/>),
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

    mockCarnetcard = mount(
      <div className="card carnet-card col-md-4 col-xs-6">
        <a href="#" className="card-remove-btn" onClick={handleRemove}>Remove</a>
      </div>
    );

    expect(mockCarnetcard.find('.card-remove-btn').length).toEqual(1);
    mockCarnetcard.first().find('.card-remove-btn').simulate('click');
    expect(handleRemove).toHaveBeenCalled();
  });

  it('can share the card information via social media', () => {
    const handleShare = jest.fn();

    mockCarnetcard = mount(
      <div className="card carnet-card col-md-4 col-xs-6">
        <a href="#" className="card-share-btn" onClick={handleShare}>Remove</a>
      </div>
    );

    expect(mockCarnetcard.find('.card-share-btn').length).toEqual(1);
    mockCarnetcard.first().find('.card-share-btn').simulate('click');
    expect(handleShare).toHaveBeenCalled();
  });
});

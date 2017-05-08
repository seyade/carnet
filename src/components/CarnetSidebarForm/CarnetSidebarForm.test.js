// jest.mock('../CarnetSidebarForm/CarnetSidebarForm'); // mock the component before importing it using the right path
import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CarnetSidebarForm from '../CarnetSidebarForm/CarnetSidebarForm';

describe('CarnetSidebarForm', () => {
  let carnetform;

  beforeEach(() => {
    carnetform = mount(<CarnetSidebarForm />);
  });

  it('renders CarnetSidebarForm as intended', () => {
    const component = renderer.create(<CarnetSidebarForm />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('has field for bookmark title', () => {
    expect(carnetform.find('#carnet-bookmarktitle-field').length).toBe(1);

    carnetform.find('#carnet-bookmarktitle-field').node.value = 'Kenichi Strongest disciple';
    expect(carnetform.find('#carnet-bookmarktitle-field').node.value).toEqual('Kenichi Strongest disciple');
  });

  it('has field for url', () => {
    expect(carnetform.find('#carnet-url-field').length).toBe(1);

    carnetform.find('#carnet-url-field').node.value = 'http://www.kenichi.co';
    expect(carnetform.find('#carnet-url-field').node.value).toEqual('http://www.kenichi.co');
  });

  it('has field for info', () => {
    expect(carnetform.find('#carnet-info-field').length).toBe(1);

    carnetform.find('#carnet-info-field').node.value = 'Kenichi Strongest disciple. He trains at Ryuzanpaku school.';
    expect(carnetform.find('#carnet-info-field').node.value).toEqual('Kenichi Strongest disciple. He trains at Ryuzanpaku school.');
  });

  it('should submit form data', () => {
    carnetform.instance().handleSubmit = jest.fn();
    carnetform.update();
    carnetform.find('.carnet-submit-btn').simulate('submit');

    expect(carnetform.find('.carnet-submit-btn').first().length).toEqual(1);
    expect(carnetform.instance().handleSubmit).toHaveBeenCalled();
  });
});

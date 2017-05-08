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
    let bookmarkField = carnetform.find('#carnet-bookmarktitle-field');

    expect(bookmarkField.length).toBe(1);

    bookmarkField.node.value = 'Kenichi Strongest disciple';
    expect(bookmarkField.node.value).toEqual('Kenichi Strongest disciple');
  });

  it('has field for url', () => {
    let urlField = carnetform.find('#carnet-url-field');

    expect(urlField.length).toBe(1);

    urlField.node.value = 'http://www.kenichi.co';
    expect(urlField.node.value).toEqual('http://www.kenichi.co');
  });

  it('has field for info', () => {
    let infoField = carnetform.find('#carnet-info-field');

    expect(infoField.length).toBe(1);

    infoField.node.value = 'Kenichi Strongest disciple. He trains at Ryuzanpaku school.';
    expect(infoField.node.value).toEqual('Kenichi Strongest disciple. He trains at Ryuzanpaku school.');
  });

  it('should submit form data', () => {
    carnetform.instance().handleSubmit = jest.fn();
    carnetform.update();
    carnetform.find('.carnet-submit-btn').simulate('submit');

    expect(carnetform.find('.carnet-submit-btn').first().length).toEqual(1);
    expect(carnetform.instance().handleSubmit).toHaveBeenCalled();
  });
});

import React, { Component } from 'react';
import axios from 'axios';

class CarnetSidebarForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      urlname: '',
      url: '',
      info: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  processData(data) {
    alert('processing data.');
  }

  handleSubmit(e) {
    e.preventDefault();
    alert('Data saved');

    /*axios.post('http://localhost:3009/api/carnets')
      .then(response => response);*/
  }

  render() {
    return (
      <div className="carnet-form-panel">
        <form className="carnet-form">
          <div className="form-group">
            <label htmlFor="carnet-name-field">Url name</label>
            <input className="form-control"
                   type="text"
                   placeholder="name..."
                   id="carnet-name-field"
                   name="urlname"
                   value={this.state.urlname}
                   onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="carnet-url-field">Url</label>
            <input className="form-control"
                   type="text"
                   placeholder="url..."
                   id="carnet-url-field"
                   name="url"
                   value={this.state.url}
                   onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="carnet-info-field">Info</label>
            <textarea className="form-control"
                      placeholder="info..."
                      id="carnet-info-field"
                      rows="5"
                      cols="20"
                      name="info"
                      value={this.state.info}
                      onChange={this.handleChange}>
            </textarea>
          </div>

          <input className="btn btn-primary" type="submit" value="Save" onClick={this.handleSubmit}/>
        </form>
        <h2>{this.state['urlname']}</h2>
        <h2>{this.state['url']}</h2>
        <h2>{this.state['info']}</h2>
      </div>
    );
  }
}

export default CarnetSidebarForm;

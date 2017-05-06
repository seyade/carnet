import React, { Component } from 'react';
import axios from 'axios';

class CarnetSidebarForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookmarkTitle: '',
      url: '',
      info: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let payload = {
      bookmarkTitle: this.state.bookmarkTitle,
      url: this.state.url,
      info: this.state.info
    };

    this.postCarnet(payload);

    console.log('Payload: ', payload);
  }

  postCarnet(data) {
    return axios.post('http://localhost:3009/api/carnets', data)
      .then(response => {
        console.log('Response: ', response.message);
      });
  }

  render() {
    return (
      <div className="carnet-form-panel">
        <form className="carnet-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="carnet-bookmarktitle-field">Bookmark Title</label>
            <input className="form-control"
                   type="text"
                   placeholder="bookmark title..."
                   id="carnet-bookmarktitle-field"
                   name="bookmarkTitle"
                   value={this.state.bookmarkTitle}
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

          <input className="btn btn-primary" type="submit" value="Save" />
        </form>
        <div className="post-results-panel">
          <h2>{}</h2>
        </div>
      </div>
    );
  }
}

export default CarnetSidebarForm;

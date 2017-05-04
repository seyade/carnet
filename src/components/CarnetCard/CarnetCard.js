import React, { Component } from 'react';

class CarnetCard extends Component {

  static defaultProps = {
    bookmarkTitle: 'No data',
    url: '',
    info: 'Please add a Carnet bookmark.'
  }

  handleRemove() {
    alert('Card should be removed!');
  }

  handleShare(e) {
    e.preventDefault();
    alert('Card info can shared on social media.');
  }

  render() {
    return (
      <div className="card carnet-card col-md-4 col-xs-6">
        <a href="#" className="card-remove-btn" onClick={this.handleRemove}>Remove</a>
        <div>
          <h3 className="card-title">{this.props.carnet.bookmarkTitle}</h3>
          <p className="card-url"><a href={this.props.carnet.url} target="_blank">{this.props.carnet.url}</a></p>
          <p className="card-info">{this.props.carnet.info}</p>
        </div>
        <div>
          <a className="card-submit-btn btn btn-primary" onClick={this.handleShare}>Share</a>
        </div>
      </div>
    );
  }
}

export default CarnetCard;
